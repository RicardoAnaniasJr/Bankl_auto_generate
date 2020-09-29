import { Column, Entity, Index, OneToMany } from "typeorm";
import { WorkOrderProduct } from "./WorkOrderProduct";

@Index("PK_Work_Order_1", ["idOrdem", "numeroOrdemFabricacao"], {
  unique: true,
})
@Entity("Work_Order", { schema: "dbo" })
export class WorkOrder {
  @Column("int", { primary: true, name: "ID_Ordem" })
  idOrdem: number;

  @Column("int", { primary: true, name: "Numero_Ordem_Fabricacao" })
  numeroOrdemFabricacao: number;

  @Column("int", { name: "Tipo_Ordem_Fabricacao" })
  tipoOrdemFabricacao: number;

  @OneToMany(
    () => WorkOrderProduct,
    (workOrderProduct) => workOrderProduct.workOrder
  )
  workOrderProducts: WorkOrderProduct[];
}
