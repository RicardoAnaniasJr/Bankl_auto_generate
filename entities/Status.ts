import { Column, Entity, Index, OneToMany } from "typeorm";
import { Cobranca } from "./Cobranca";
import { Contas } from "./Contas";
import { WorkOrderProduct } from "./WorkOrderProduct";

@Index("PK_status", ["idStatus"], { unique: true })
@Entity("status", { schema: "dbo" })
export class Status {
  @Column("int", { primary: true, name: "ID_status" })
  idStatus: number;

  @Column("varchar", { name: "Tipo_status", length: 50 })
  tipoStatus: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @OneToMany(() => Cobranca, (cobranca) => cobranca.statusCobranca)
  cobrancas: Cobranca[];

  @OneToMany(() => Contas, (contas) => contas.status)
  contas: Contas[];

  @OneToMany(
    () => WorkOrderProduct,
    (workOrderProduct) => workOrderProduct.statusOrdemFabricacao
  )
  workOrderProducts: WorkOrderProduct[];
}
