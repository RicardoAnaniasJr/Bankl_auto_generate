import { Column, Entity, Index, OneToMany } from "typeorm";
import { SalesOrderProduct } from "./SalesOrderProduct";
import { VendasPedidos } from "./VendasPedidos";

@Index("PK_Sales_Order", ["idPedido", "numeroOrderVenda"], { unique: true })
@Entity("Sales_Order", { schema: "dbo" })
export class SalesOrder {
  @Column("int", { primary: true, name: "ID_Pedido" })
  idPedido: number;

  @Column("int", { primary: true, name: "Numero_order_venda" })
  numeroOrderVenda: number;

  @OneToMany(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.salesOrder
  )
  salesOrderProducts: SalesOrderProduct[];

  @OneToMany(() => VendasPedidos, (vendasPedidos) => vendasPedidos.salesOrder)
  vendasPedidos: VendasPedidos[];
}
