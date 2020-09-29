import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Produto } from "./Produto";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";

@Index("PK_Estoque_Armazenagem", ["idProdEstoque"], { unique: true })
@Entity("Estoque_Armazenagem", { schema: "dbo" })
export class EstoqueArmazenagem {
  @Column("int", { primary: true, name: "ID_Prod_Estoque" })
  idProdEstoque: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "Cod_armazenagem" })
  codArmazenagem: number;

  @Column("int", { name: "QTD_Disponivel" })
  qtdDisponivel: number;

  @Column("int", { name: "Volume_atual_estoque" })
  volumeAtualEstoque: number;

  @ManyToOne(() => Produto, (produto) => produto.estoqueArmazenagems)
  @JoinColumn([{ name: "COD_Produto", referencedColumnName: "idProduto" }])
  codProduto: Produto;

  @OneToOne(
    () => EstoqueArmazenagem,
    (estoqueArmazenagem) => estoqueArmazenagem.estoqueArmazenagem
  )
  @JoinColumn([
    { name: "ID_Prod_Estoque", referencedColumnName: "idProdEstoque" },
  ])
  idProdEstoque2: EstoqueArmazenagem;

  @OneToOne(
    () => EstoqueArmazenagem,
    (estoqueArmazenagem) => estoqueArmazenagem.idProdEstoque2
  )
  estoqueArmazenagem: EstoqueArmazenagem;

  @ManyToOne(() => Produto, (produto) => produto.estoqueArmazenagems2)
  @JoinColumn([{ name: "COD_Produto", referencedColumnName: "idProduto" }])
  codProduto2: Produto;

  @OneToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.estoqueArmazenagem
  )
  @JoinColumn([
    { name: "ID_Prod_Estoque", referencedColumnName: "codProdArmazenagem" },
  ])
  idProdEstoque3: ProdutoArmazenagem;
}
