import { Column, Entity, Index, OneToMany } from "typeorm";
import { Banco } from "./Banco";

@Index("PK_Type_conta_banco", ["idTipoConta"], { unique: true })
@Entity("Type_conta_banco", { schema: "dbo" })
export class TypeContaBanco {
  @Column("int", { primary: true, name: "ID_tipo_conta" })
  idTipoConta: number;

  @Column("varchar", { name: "Tipo_conta", length: 50 })
  tipoConta: string;

  @OneToMany(() => Banco, (banco) => banco.tipoConta)
  bancos: Banco[];
}
