import { Column, Entity, Index, OneToMany } from "typeorm";
import { Endereco } from "./Endereco";

@Index("PK_Address_type", ["idType"], { unique: true })
@Entity("Address_type", { schema: "dbo" })
export class AddressType {
  @Column("int", { primary: true, name: "ID_type" })
  idType: number;

  @Column("varchar", { name: "Tipo", length: 50 })
  tipo: string;

  @OneToMany(() => Endereco, (endereco) => endereco.tipoEndereco)
  enderecos: Endereco[];
}
