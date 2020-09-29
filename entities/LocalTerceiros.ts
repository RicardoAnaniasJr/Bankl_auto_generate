import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Local } from "./Local";

@Index("PK_Local_terceiros", ["idLocalTerceiro"], { unique: true })
@Entity("Local_terceiros", { schema: "dbo" })
export class LocalTerceiros {
  @Column("int", { primary: true, name: "Id_local_terceiro" })
  idLocalTerceiro: number;

  @Column("varchar", { name: "CNPJ_prestador", length: 50 })
  cnpjPrestador: string;

  @ManyToOne(() => Local, (local) => local.localTerceiros)
  @JoinColumn([
    { name: "Cod_local", referencedColumnName: "idLocal" },
    { name: "Nome_local", referencedColumnName: "nomeLocal" },
  ])
  local: Local;
}
