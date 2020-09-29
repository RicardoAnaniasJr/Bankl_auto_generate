import { Column, Entity, Index, OneToMany } from "typeorm";
import { Ajuste } from "./Ajuste";

@Index("PK_Tipo_Ajuste", ["idTipo"], { unique: true })
@Entity("Tipo_Ajuste", { schema: "dbo" })
export class TipoAjuste {
  @Column("int", { primary: true, name: "ID_Tipo" })
  idTipo: number;

  @Column("varchar", { name: "Nome_Tipo", nullable: true, length: 50 })
  nomeTipo: string | null;

  @OneToMany(() => Ajuste, (ajuste) => ajuste.tipoAjuste)
  ajustes: Ajuste[];
}
