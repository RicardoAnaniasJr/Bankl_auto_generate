import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Contas } from "./Contas";
import { Produto } from "./Produto";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";
import { PurchaseOrder } from "./PurchaseOrder";

@Index("PK_Purchase_Order_Product", ["id", "numeroNfEntrada"], { unique: true })
@Entity("Purchase_Order_Product", { schema: "dbo" })
export class PurchaseOrderProduct {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("varchar", { name: "Tipo_Produto", length: 50 })
  tipoProduto: string;

  @Column("float", { name: "Valor_Pedido", precision: 53 })
  valorPedido: number;

  @Column("int", { name: "Status_Pedido" })
  statusPedido: number;

  @Column("int", { name: "Status_Anterior" })
  statusAnterior: number;

  @Column("float", { name: "Preco_Venda", precision: 53 })
  precoVenda: number;

  @Column("int", { primary: true, name: "Numero_NF_Entrada" })
  numeroNfEntrada: number;

  @Column("int", { name: "CNPJ_Fornecedor" })
  cnpjFornecedor: number;

  @OneToMany(() => Contas, (contas) => contas.purchaseOrderProduct)
  contas: Contas[];

  @ManyToOne(() => Produto, (produto) => produto.purchaseOrderProducts)
  @JoinColumn([{ name: "ID_Produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;

  @ManyToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.purchaseOrderProducts
  )
  @JoinColumn([
    { name: "Cod_Armazenagem", referencedColumnName: "codProdArmazenagem" },
  ])
  codArmazenagem: ProdutoArmazenagem;

  @ManyToOne(
    () => PurchaseOrder,
    (purchaseOrder) => purchaseOrder.purchaseOrderProducts
  )
  @JoinColumn([
    { name: "Numero_Pedido", referencedColumnName: "idPedido" },
    { name: "Numero_Ordem_Compra", referencedColumnName: "numeroOrdemCompra" },
  ])
  purchaseOrder: PurchaseOrder;

  @OneToOne(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.purchaseOrderProduct
  )
  @JoinColumn([
    { name: "ID", referencedColumnName: "id" },
    { name: "Numero_NF_Entrada", referencedColumnName: "numeroNfEntrada" },
  ])
  purchaseOrderProduct: PurchaseOrderProduct;

  @OneToOne(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.purchaseOrderProduct
  )
  purchaseOrderProduct: PurchaseOrderProduct;
}
