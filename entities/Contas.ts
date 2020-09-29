import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Status } from "./Status";
import { PurchaseOrderProduct } from "./PurchaseOrderProduct";

@Index("PK_Contas", ["idPagto"], { unique: true })
@Entity("Contas", { schema: "dbo" })
export class Contas {
  @Column("int", { primary: true, name: "ID_pagto" })
  idPagto: number;

  @OneToOne(() => Contas, (contas) => contas.contas)
  @JoinColumn([{ name: "ID_pagto", referencedColumnName: "idPagto" }])
  idPagto2: Contas;

  @OneToOne(() => Contas, (contas) => contas.idPagto2)
  contas: Contas;

  @ManyToOne(() => Status, (status) => status.contas)
  @JoinColumn([{ name: "status", referencedColumnName: "idStatus" }])
  status: Status;

  @ManyToOne(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.contas
  )
  @JoinColumn([
    { name: "ID_ordem", referencedColumnName: "id" },
    { name: "N_NF", referencedColumnName: "numeroNfEntrada" },
  ])
  purchaseOrderProduct: PurchaseOrderProduct;
}
