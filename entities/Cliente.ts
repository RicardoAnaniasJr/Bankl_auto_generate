import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Cobranca } from "./Cobranca";

@Index("PK_Cliente", ["idCliente", "cnpjCliente"], { unique: true })
@Entity("Cliente", { schema: "dbo" })
export class Cliente {
  @Column("int", { primary: true, name: "ID_cliente" })
  idCliente: number;

  @Column("int", { primary: true, name: "CNPJ_Cliente" })
  cnpjCliente: number;

  @Column("varchar", { name: "Nome_empresa", length: 50 })
  nomeEmpresa: string;

  @Column("varchar", { name: "Razao_social", length: 50 })
  razaoSocial: string;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.clientes)
  @JoinColumn([{ name: "ID_Pessoa", referencedColumnName: "idPessoa" }])
  idPessoa: Pessoa;

  @OneToMany(() => Cobranca, (cobranca) => cobranca.cliente)
  cobrancas: Cobranca[];
}
