import { Column, Entity, Index, OneToMany } from "typeorm";
import { PurchaseOrderProduct } from "./PurchaseOrderProduct";

@Index("PK_Purchase_Order_1", ["idPedido", "numeroOrdemCompra"], {
  unique: true,
})
@Entity("Purchase_Order", { schema: "dbo" })
export class PurchaseOrder {
  @Column("int", { primary: true, name: "ID_Pedido" })
  idPedido: number;

  @Column("int", { primary: true, name: "Numero_Ordem_Compra" })
  numeroOrdemCompra: number;

  @OneToMany(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.purchaseOrder
  )
  purchaseOrderProducts: PurchaseOrderProduct[];
}
