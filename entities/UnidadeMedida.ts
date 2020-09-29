import { Column, Entity, Index, OneToMany } from "typeorm";
import { Produto } from "./Produto";

@Index("PK_Unidade_medida", ["codUnMedida"], { unique: true })
@Entity("Unidade_medida", { schema: "dbo" })
export class UnidadeMedida {
  @Column("int", { primary: true, name: "Cod_Un_medida" })
  codUnMedida: number;

  @Column("varchar", { name: "Tipo_Unidade_Medida", length: 50 })
  tipoUnidadeMedida: string;

  @Column("varchar", { name: "Unidade_medida", length: 50 })
  unidadeMedida: string;

  @OneToMany(() => Produto, (produto) => produto.codUnMedidaVolume)
  produtos: Produto[];
}
