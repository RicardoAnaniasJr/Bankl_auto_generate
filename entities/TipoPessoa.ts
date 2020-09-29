import { Column, Entity, Index, OneToMany } from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("PK_Tipo_pessoa", ["idType"], { unique: true })
@Entity("Tipo_pessoa", { schema: "dbo" })
export class TipoPessoa {
  @Column("int", { primary: true, name: "ID_type" })
  idType: number;

  @Column("varchar", { name: "Tipo", length: 50 })
  tipo: string;

  @OneToMany(() => Pessoa, (pessoa) => pessoa.tipoPessoa)
  pessoas: Pessoa[];
}
