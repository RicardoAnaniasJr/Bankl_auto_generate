import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TipoAjuste } from "./TipoAjuste";
import { AjusteSucataProduto } from "./AjusteSucataProduto";

@Index("PK_Ajuste", ["idAjuste"], { unique: true })
@Entity("Ajuste", { schema: "dbo" })
export class Ajuste {
  @Column("int", { primary: true, name: "ID_ajuste" })
  idAjuste: number;

  @Column("varchar", { name: "Justificativa", length: 50 })
  justificativa: string;

  @ManyToOne(() => TipoAjuste, (tipoAjuste) => tipoAjuste.ajustes)
  @JoinColumn([{ name: "Tipo_Ajuste", referencedColumnName: "idTipo" }])
  tipoAjuste: TipoAjuste;

  @OneToMany(
    () => AjusteSucataProduto,
    (ajusteSucataProduto) => ajusteSucataProduto.idAjuste
  )
  ajusteSucataProdutos: AjusteSucataProduto[];
}
