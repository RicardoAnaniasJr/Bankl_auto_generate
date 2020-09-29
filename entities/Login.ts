import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Cadastro } from "./Cadastro";

@Entity("login", { schema: "dbo" })
export class Login {
  @ManyToOne(() => Cadastro, (cadastro) => cadastro.logins)
  @JoinColumn([
    { name: "login", referencedColumnName: "idCadastro" },
    { name: "senha", referencedColumnName: "senha" },
  ])
  cadastro: Cadastro;
}
