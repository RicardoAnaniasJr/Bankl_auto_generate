import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cadastro } from "./Cadastro";
import { Pessoa } from "./Pessoa";
import { OrdemRequisicaoInterna } from "./OrdemRequisicaoInterna";

@Index("PK_Funcionario", ["idFuncionario"], { unique: true })
@Entity("Funcionario", { schema: "dbo" })
export class Funcionario {
  @Column("int", { primary: true, name: "ID_Funcionario" })
  idFuncionario: number;

  @Column("varchar", { name: "cargo", length: 50 })
  cargo: string;

  @Column("varchar", { name: "Setor", length: 50 })
  setor: string;

  @OneToMany(() => Cadastro, (cadastro) => cadastro.idFuncionario)
  cadastros: Cadastro[];

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.funcionarios)
  @JoinColumn([{ name: "ID_pessoa", referencedColumnName: "idPessoa" }])
  idPessoa: Pessoa;

  @OneToMany(
    () => OrdemRequisicaoInterna,
    (ordemRequisicaoInterna) => ordemRequisicaoInterna.idFuncionario
  )
  ordemRequisicaoInternas: OrdemRequisicaoInterna[];
}
