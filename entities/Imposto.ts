import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Produto } from "./Produto";

@Index("PK_Imposto", ["idImposto"], { unique: true })
@Entity("Imposto", { schema: "dbo" })
export class Imposto {
  @Column("nchar", { primary: true, name: "ID_Imposto", length: 10 })
  idImposto: string;

  @Column("varchar", { name: "Nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("int", { name: "Imposto", nullable: true })
  imposto: number | null;

  @ManyToOne(() => Produto, (produto) => produto.impostos)
  @JoinColumn([{ name: "ID_prod", referencedColumnName: "idProduto" }])
  idProd: Produto;
}
