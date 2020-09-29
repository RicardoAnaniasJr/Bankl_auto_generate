import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Endereco } from "./Endereco";
import { Cliente } from "./Cliente";
import { Status } from "./Status";
import { SalesOrderProduct } from "./SalesOrderProduct";

@Index("PK_Cobranc", ["idCobranca"], { unique: true })
@Entity("Cobranca", { schema: "dbo" })
export class Cobranca {
  @Column("int", { primary: true, name: "ID_cobranca" })
  idCobranca: number;

  @Column("int", { name: "Valor_pedido" })
  valorPedido: number;

  @Column("varchar", { name: "Nome_cliente", length: 50 })
  nomeCliente: string;

  @Column("date", { name: "Prazo" })
  prazo: Date;

  @ManyToOne(() => Endereco, (endereco) => endereco.cobrancas)
  @JoinColumn([
    { name: "Endereco_cliente", referencedColumnName: "idEndereco" },
  ])
  enderecoCliente: Endereco;

  @ManyToOne(() => Cliente, (cliente) => cliente.cobrancas)
  @JoinColumn([
    { name: "ID_cliente", referencedColumnName: "idCliente" },
    { name: "CNPJ_Cliente", referencedColumnName: "cnpjCliente" },
  ])
  cliente: Cliente;

  @OneToOne(() => Cobranca, (cobranca) => cobranca.cobranca)
  @JoinColumn([{ name: "ID_cobranca", referencedColumnName: "idCobranca" }])
  idCobranca2: Cobranca;

  @OneToOne(() => Cobranca, (cobranca) => cobranca.idCobranca2)
  cobranca: Cobranca;

  @ManyToOne(() => Status, (status) => status.cobrancas)
  @JoinColumn([{ name: "Status_cobranca", referencedColumnName: "idStatus" }])
  statusCobranca: Status;

  @ManyToOne(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.cobrancas
  )
  @JoinColumn([
    { name: "ID_pedido", referencedColumnName: "id" },
    { name: "NF_Saida", referencedColumnName: "numeroNfSaida" },
  ])
  salesOrderProduct: SalesOrderProduct;
}
