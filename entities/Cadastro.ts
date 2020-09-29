import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Funcionario } from "./Funcionario";
import { Login } from "./Login";

@Index("PK_cadastro_1", ["idCadastro", "senha"], { unique: true })
@Entity("cadastro", { schema: "dbo" })
export class Cadastro {
  @Column("int", { primary: true, name: "ID_Cadastro" })
  idCadastro: number;

  @Column("varchar", { name: "cargo", length: 50 })
  cargo: string;

  @Column("varchar", { primary: true, name: "senha", length: 50 })
  senha: string;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.cadastros)
  @JoinColumn([
    { name: "ID_Funcionario", referencedColumnName: "idFuncionario" },
  ])
  idFuncionario: Funcionario;

  @OneToMany(() => Login, (login) => login.cadastro)
  logins: Login[];
}
