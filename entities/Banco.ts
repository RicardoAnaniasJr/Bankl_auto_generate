import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Pessoa } from "./Pessoa";
import { TypeContaBanco } from "./TypeContaBanco";

@Index("PK_Banco", ["idCadastro"], { unique: true })
@Entity("Banco", { schema: "dbo" })
export class Banco {
  @Column("int", { primary: true, name: "ID_cadastro" })
  idCadastro: number;

  @Column("int", { name: "Conta" })
  conta: number;

  @Column("int", { name: "Agencia" })
  agencia: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.bancos)
  @JoinColumn([{ name: "ID_pessoa", referencedColumnName: "idPessoa" }])
  idPessoa: Pessoa;

  @ManyToOne(() => TypeContaBanco, (typeContaBanco) => typeContaBanco.bancos)
  @JoinColumn([{ name: "Tipo_conta", referencedColumnName: "idTipoConta" }])
  tipoConta: TypeContaBanco;
}
