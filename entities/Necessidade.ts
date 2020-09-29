import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";

@Index("PK_Necessidade", ["idNecessidade"], { unique: true })
@Entity("Necessidade", { schema: "dbo" })
export class Necessidade {
  @Column("int", { primary: true, name: "ID_necessidade" })
  idNecessidade: number;

  @Column("int", { name: "Tipo_Necessidade" })
  tipoNecessidade: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "Tipo_Produto" })
  tipoProduto: number;

  @Column("float", { name: "Custo", precision: 53 })
  custo: number;

  @Column("int", { name: "Numero_Pedido_Venda" })
  numeroPedidoVenda: number;

  @Column("int", { name: "Numero_Pedido_Compra" })
  numeroPedidoCompra: number;

  @Column("int", { name: "Quantidade_Estoque" })
  quantidadeEstoque: number;

  @Column("int", { name: "Qtd_Saida" })
  qtdSaida: number;

  @Column("int", { name: "Qtd_Entrada" })
  qtdEntrada: number;

  @Column("float", { name: "Preco_Venda", precision: 53 })
  precoVenda: number;

  @ManyToOne(() => Fornecedor, (fornecedor) => fornecedor.necessidades)
  @JoinColumn([
    { name: "ID_Fornecedor", referencedColumnName: "idFornecedor" },
    { name: "CNPJ_Fornecedor", referencedColumnName: "cnpj" },
  ])
  fornecedor: Fornecedor;

  @ManyToOne(() => Produto, (produto) => produto.necessidades)
  @JoinColumn([{ name: "ID_produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;

  @ManyToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.necessidades
  )
  @JoinColumn([
    { name: "Cod_Armazenagem", referencedColumnName: "codProdArmazenagem" },
  ])
  codArmazenagem: ProdutoArmazenagem;
}
