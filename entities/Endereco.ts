import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cobranca } from "./Cobranca";
import { AddressType } from "./AddressType";
import { Pessoa } from "./Pessoa";

@Index("PK_Endereco", ["idEndereco"], { unique: true })
@Entity("Endereco", { schema: "dbo" })
export class Endereco {
  @Column("int", { primary: true, name: "ID_endereco" })
  idEndereco: number;

  @Column("varchar", { name: "Rua", length: 50 })
  rua: string;

  @Column("varchar", { name: "Cidade", length: 50 })
  cidade: string;

  @Column("varchar", { name: "Estado", length: 50 })
  estado: string;

  @Column("int", { name: "Cep" })
  cep: number;

  @Column("varchar", { name: "Pais", length: 50 })
  pais: string;

  @OneToMany(() => Cobranca, (cobranca) => cobranca.enderecoCliente)
  cobrancas: Cobranca[];

  @ManyToOne(() => AddressType, (addressType) => addressType.enderecos)
  @JoinColumn([{ name: "Tipo_endereco", referencedColumnName: "idType" }])
  tipoEndereco: AddressType;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos)
  @JoinColumn([{ name: "ID_pessoa", referencedColumnName: "idPessoa" }])
  idPessoa: Pessoa;
}
