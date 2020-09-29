import { Column, Entity, Index, OneToMany } from "typeorm";
import { Armazenagem } from "./Armazenagem";

@Index("PK_Deposito", ["idDeposito", "nomeDeposito"], { unique: true })
@Entity("Deposito", { schema: "dbo" })
export class Deposito {
  @Column("int", { primary: true, name: "Id_Deposito" })
  idDeposito: number;

  @Column("varchar", { primary: true, name: "Nome_deposito", length: 50 })
  nomeDeposito: string;

  @Column("binary", { name: "terceiros", length: 50 })
  terceiros: Buffer;

  @Column("varchar", { name: "Cidade", length: 50 })
  cidade: string;

  @Column("char", { name: "Estado", length: 10 })
  estado: string;

  @OneToMany(() => Armazenagem, (armazenagem) => armazenagem.deposito)
  armazenagems: Armazenagem[];
}
