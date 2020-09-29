import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";
import { Produto } from "./Produto";
import { OrdemRequisicaoInterna } from "./OrdemRequisicaoInterna";

@Index("PK_Requisicao_produto_1", ["id"], { unique: true })
@Entity("Requisicao_produto", { schema: "dbo" })
export class RequisicaoProduto {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "Quantidade" })
  quantidade: number;

  @ManyToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.requisicaoProdutos
  )
  @JoinColumn([
    { name: "Cod_armazenagem", referencedColumnName: "codProdArmazenagem" },
  ])
  codArmazenagem: ProdutoArmazenagem;

  @ManyToOne(() => Produto, (produto) => produto.requisicaoProdutos)
  @JoinColumn([{ name: "ID_Produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;

  @ManyToOne(
    () => OrdemRequisicaoInterna,
    (ordemRequisicaoInterna) => ordemRequisicaoInterna.requisicaoProdutos
  )
  @JoinColumn([
    { name: "ID_Requisicao", referencedColumnName: "idRequisicao" },
    { name: "Numero_Requisicao", referencedColumnName: "numeroRequisicao" },
  ])
  ordemRequisicaoInterna: OrdemRequisicaoInterna;
}
