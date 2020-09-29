import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Banco } from "./Banco";
import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Fornecedor } from "./Fornecedor";
import { Funcionario } from "./Funcionario";
import { TipoPessoa } from "./TipoPessoa";

@Index("PK_Pessoa", ["idPessoa"], { unique: true })
@Entity("Pessoa", { schema: "dbo" })
export class Pessoa {
  @Column("int", { primary: true, name: "ID_pessoa" })
  idPessoa: number;

  @Column("varchar", { name: "Nome", length: 50 })
  nome: string;

  @Column("int", { name: "CPF" })
  cpf: number;

  @Column("varchar", { name: "Telefone", length: 50 })
  telefone: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @OneToMany(() => Banco, (banco) => banco.idPessoa)
  bancos: Banco[];

  @OneToMany(() => Cliente, (cliente) => cliente.idPessoa)
  clientes: Cliente[];

  @OneToMany(() => Endereco, (endereco) => endereco.idPessoa)
  enderecos: Endereco[];

  @OneToMany(() => Fornecedor, (fornecedor) => fornecedor.idPessoa)
  fornecedors: Fornecedor[];

  @OneToMany(() => Funcionario, (funcionario) => funcionario.idPessoa)
  funcionarios: Funcionario[];

  @ManyToOne(() => TipoPessoa, (tipoPessoa) => tipoPessoa.pessoas)
  @JoinColumn([{ name: "Tipo_pessoa", referencedColumnName: "idType" }])
  tipoPessoa: TipoPessoa;
}
