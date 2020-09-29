import { Column, Entity, Index, OneToMany } from "typeorm";
import { Armazenagem } from "./Armazenagem";
import { LocalTerceiros } from "./LocalTerceiros";

@Index("PK_Local", ["idLocal", "nomeLocal"], { unique: true })
@Entity("Local", { schema: "dbo" })
export class Local {
  @Column("int", { primary: true, name: "Id_Local" })
  idLocal: number;

  @Column("varchar", { primary: true, name: "Nome_Local", length: 50 })
  nomeLocal: string;

  @Column("varchar", { name: "Cidade", length: 50 })
  cidade: string;

  @Column("binary", { name: "Terceiro", length: 50 })
  terceiro: Buffer;

  @OneToMany(() => Armazenagem, (armazenagem) => armazenagem.local)
  armazenagems: Armazenagem[];

  @OneToMany(() => LocalTerceiros, (localTerceiros) => localTerceiros.local)
  localTerceiros: LocalTerceiros[];
}
