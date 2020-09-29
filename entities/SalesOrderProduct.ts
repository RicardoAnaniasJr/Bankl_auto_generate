import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Cobranca } from "./Cobranca";
import { Produto } from "./Produto";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";
import { SalesOrder } from "./SalesOrder";

@Index("PK_Sales_Order_Product", ["id", "numeroNfSaida"], { unique: true })
@Entity("Sales_Order_Product", { schema: "dbo" })
export class SalesOrderProduct {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "Tipo_Produto" })
  tipoProduto: number;

  @Column("float", { name: "Valor_Pedido", precision: 53 })
  valorPedido: number;

  @Column("int", { name: "Status_Pedido" })
  statusPedido: number;

  @Column("int", { name: "Status_Anterior" })
  statusAnterior: number;

  @Column("float", { name: "Preco_venda", precision: 53 })
  precoVenda: number;

  @Column("int", { primary: true, name: "Numero_NF_Saida" })
  numeroNfSaida: number;

  @OneToMany(() => Cobranca, (cobranca) => cobranca.salesOrderProduct)
  cobrancas: Cobranca[];

  @ManyToOne(() => Produto, (produto) => produto.salesOrderProducts)
  @JoinColumn([{ name: "ID_Produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;

  @ManyToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.salesOrderProducts
  )
  @JoinColumn([
    { name: "Cod_Armazenagem", referencedColumnName: "codProdArmazenagem" },
  ])
  codArmazenagem: ProdutoArmazenagem;

  @ManyToOne(() => SalesOrder, (salesOrder) => salesOrder.salesOrderProducts)
  @JoinColumn([
    { name: "ID_Pedido", referencedColumnName: "idPedido" },
    { name: "N_Ordem_Venda", referencedColumnName: "numeroOrderVenda" },
  ])
  salesOrder: SalesOrder;

  @OneToOne(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.salesOrderProduct
  )
  @JoinColumn([
    { name: "ID", referencedColumnName: "id" },
    { name: "Numero_NF_Saida", referencedColumnName: "numeroNfSaida" },
  ])
  salesOrderProduct: SalesOrderProduct;

  @OneToOne(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.salesOrderProduct
  )
  salesOrderProduct: SalesOrderProduct;

  @OneToOne(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.salesOrderProduct2
  )
  @JoinColumn([
    { name: "ID", referencedColumnName: "id" },
    { name: "Numero_NF_Saida", referencedColumnName: "numeroNfSaida" },
  ])
  salesOrderProduct2: SalesOrderProduct;

  @OneToOne(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.salesOrderProduct2
  )
  salesOrderProduct2: SalesOrderProduct;
}
