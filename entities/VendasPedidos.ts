import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { SalesOrder } from "./SalesOrder";

@Index("PK_Vendas_Pedidos", ["idVenda"], { unique: true })
@Entity("Vendas_Pedidos", { schema: "dbo" })
export class VendasPedidos {
  @Column("int", { primary: true, name: "ID_venda" })
  idVenda: number;

  @Column("int", { name: "ID_funcionario" })
  idFuncionario: number;

  @Column("int", { name: "ID_cliente" })
  idCliente: number;

  @ManyToOne(() => SalesOrder, (salesOrder) => salesOrder.vendasPedidos)
  @JoinColumn([
    { name: "ID_pedido", referencedColumnName: "idPedido" },
    { name: "N_pedido", referencedColumnName: "numeroOrderVenda" },
  ])
  salesOrder: SalesOrder;

  @OneToOne(() => VendasPedidos, (vendasPedidos) => vendasPedidos.vendasPedidos)
  @JoinColumn([{ name: "ID_venda", referencedColumnName: "idVenda" }])
  idVenda2: VendasPedidos;

  @OneToOne(() => VendasPedidos, (vendasPedidos) => vendasPedidos.idVenda2)
  vendasPedidos: VendasPedidos;
}
