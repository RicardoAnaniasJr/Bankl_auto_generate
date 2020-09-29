import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { AjusteSucataProduto } from "./AjusteSucataProduto";
import { EstoqueArmazenagem } from "./EstoqueArmazenagem";
import { FornProd } from "./FornProd";
import { Imposto } from "./Imposto";
import { Necessidade } from "./Necessidade";
import { UnidadeMedida } from "./UnidadeMedida";
import { PurchaseOrderProduct } from "./PurchaseOrderProduct";
import { RequisicaoProduto } from "./RequisicaoProduto";
import { SalesOrderProduct } from "./SalesOrderProduct";
import { WorkOrderProduct } from "./WorkOrderProduct";

@Index("PK_Produto_1", ["idProduto"], { unique: true })
@Entity("Produto", { schema: "dbo" })
export class Produto {
  @Column("int", { primary: true, name: "ID_produto" })
  idProduto: number;

  @Column("varchar", { name: "Nome_produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "custo" })
  custo: number;

  @Column("int", { name: "margem_lucro" })
  margemLucro: number;

  @Column("int", { name: "preco_venda" })
  precoVenda: number;

  @Column("int", { name: "Tipo_Produto" })
  tipoProduto: number;

  @Column("int", { name: "Cod_Un_medida_Principal" })
  codUnMedidaPrincipal: number;

  @Column("int", { name: "Cod_Un_medida_Secundario" })
  codUnMedidaSecundario: number;

  @Column("int", { name: "Cod_Un_medida_Compras" })
  codUnMedidaCompras: number;

  @Column("int", { name: "Cod_Un_medida_Preco" })
  codUnMedidaPreco: number;

  @Column("int", { name: "Cod_Un_medida_Envio" })
  codUnMedidaEnvio: number;

  @Column("int", { name: "Cod_Un_medida_Componente" })
  codUnMedidaComponente: number;

  @Column("int", { name: "Cod_Un_medida_Peso" })
  codUnMedidaPeso: number;

  @OneToMany(
    () => AjusteSucataProduto,
    (ajusteSucataProduto) => ajusteSucataProduto.idProduto
  )
  ajusteSucataProdutos: AjusteSucataProduto[];

  @OneToMany(
    () => EstoqueArmazenagem,
    (estoqueArmazenagem) => estoqueArmazenagem.codProduto
  )
  estoqueArmazenagems: EstoqueArmazenagem[];

  @OneToMany(
    () => EstoqueArmazenagem,
    (estoqueArmazenagem) => estoqueArmazenagem.codProduto2
  )
  estoqueArmazenagems2: EstoqueArmazenagem[];

  @OneToMany(() => FornProd, (fornProd) => fornProd.idProduto)
  fornProds: FornProd[];

  @OneToMany(() => Imposto, (imposto) => imposto.idProd)
  impostos: Imposto[];

  @OneToMany(() => Necessidade, (necessidade) => necessidade.idProduto)
  necessidades: Necessidade[];

  @OneToOne(() => Produto, (produto) => produto.produto)
  @JoinColumn([{ name: "ID_produto", referencedColumnName: "idProduto" }])
  idProduto2: Produto;

  @OneToOne(() => Produto, (produto) => produto.idProduto2)
  produto: Produto;

  @ManyToOne(() => UnidadeMedida, (unidadeMedida) => unidadeMedida.produtos)
  @JoinColumn([
    { name: "Cod_Un_medida_Volume", referencedColumnName: "codUnMedida" },
  ])
  codUnMedidaVolume: UnidadeMedida;

  @OneToMany(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.idProduto
  )
  purchaseOrderProducts: PurchaseOrderProduct[];

  @OneToMany(
    () => RequisicaoProduto,
    (requisicaoProduto) => requisicaoProduto.idProduto
  )
  requisicaoProdutos: RequisicaoProduto[];

  @OneToMany(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.idProduto
  )
  salesOrderProducts: SalesOrderProduct[];

  @OneToMany(
    () => WorkOrderProduct,
    (workOrderProduct) => workOrderProduct.idProduto
  )
  workOrderProducts: WorkOrderProduct[];
}
