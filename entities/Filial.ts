import { Column, Entity, Index, OneToMany } from "typeorm";
import { Armazenagem } from "./Armazenagem";

@Index("PK_Filial", ["codFilial", "nomeFilial"], { unique: true })
@Entity("Filial", { schema: "dbo" })
export class Filial {
  @Column("int", { primary: true, name: "Cod_Filial" })
  codFilial: number;

  @Column("int", { name: "Cep" })
  cep: number;

  @Column("varchar", { name: "Cidade", length: 50 })
  cidade: string;

  @Column("char", { name: "Estado", length: 10 })
  estado: string;

  @Column("varchar", { primary: true, name: "Nome_Filial", length: 50 })
  nomeFilial: string;

  @OneToMany(() => Armazenagem, (armazenagem) => armazenagem.filial)
  armazenagems: Armazenagem[];
}
