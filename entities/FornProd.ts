import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";

@Index("PK_Forn_prod", ["idTriang"], { unique: true })
@Entity("Forn_prod", { schema: "dbo" })
export class FornProd {
  @Column("int", { primary: true, name: "ID_triang" })
  idTriang: number;

  @Column("varchar", { name: "Nome_produto", length: 50 })
  nomeProduto: string;

  @ManyToOne(() => Fornecedor, (fornecedor) => fornecedor.fornProds)
  @JoinColumn([
    { name: "ID_forn", referencedColumnName: "idFornecedor" },
    { name: "CNPJ_forn", referencedColumnName: "cnpj" },
  ])
  fornecedor: Fornecedor;

  @ManyToOne(() => Produto, (produto) => produto.fornProds)
  @JoinColumn([{ name: "ID_produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;
}
