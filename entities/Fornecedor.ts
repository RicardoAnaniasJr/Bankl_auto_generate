import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FornProd } from "./FornProd";
import { Pessoa } from "./Pessoa";
import { Necessidade } from "./Necessidade";

@Index("PK_Fornecedor_1", ["idFornecedor", "cnpj"], { unique: true })
@Entity("Fornecedor", { schema: "dbo" })
export class Fornecedor {
  @Column("int", { primary: true, name: "ID_fornecedor" })
  idFornecedor: number;

  @Column("int", { primary: true, name: "CNPJ" })
  cnpj: number;

  @Column("varchar", { name: "Nome_empresa", length: 50 })
  nomeEmpresa: string;

  @Column("varchar", { name: "Razao_social", length: 50 })
  razaoSocial: string;

  @OneToMany(() => FornProd, (fornProd) => fornProd.fornecedor)
  fornProds: FornProd[];

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.fornecedors)
  @JoinColumn([{ name: "ID_Pessoa", referencedColumnName: "idPessoa" }])
  idPessoa: Pessoa;

  @OneToMany(() => Necessidade, (necessidade) => necessidade.fornecedor)
  necessidades: Necessidade[];
}
