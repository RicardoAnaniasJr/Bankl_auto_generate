import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { EstoqueArmazenagem } from "./EstoqueArmazenagem";
import { Necessidade } from "./Necessidade";
import { Armazenagem } from "./Armazenagem";
import { PurchaseOrderProduct } from "./PurchaseOrderProduct";
import { RequisicaoProduto } from "./RequisicaoProduto";
import { SalesOrderProduct } from "./SalesOrderProduct";
import { WorkOrderProduct } from "./WorkOrderProduct";

@Index("PK_Produto_Armazenagem", ["codProdArmazenagem"], { unique: true })
@Entity("Produto_Armazenagem", { schema: "dbo" })
export class ProdutoArmazenagem {
  @Column("int", { primary: true, name: "Cod_Prod_Armazenagem" })
  codProdArmazenagem: number;

  @Column("int", { name: "ID_produto" })
  idProduto: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @OneToOne(
    () => EstoqueArmazenagem,
    (estoqueArmazenagem) => estoqueArmazenagem.idProdEstoque3
  )
  estoqueArmazenagem: EstoqueArmazenagem;

  @OneToMany(() => Necessidade, (necessidade) => necessidade.codArmazenagem)
  necessidades: Necessidade[];

  @OneToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.produtoArmazenagem
  )
  @JoinColumn([
    {
      name: "Cod_Prod_Armazenagem",
      referencedColumnName: "codProdArmazenagem",
    },
  ])
  codProdArmazenagem2: ProdutoArmazenagem;

  @OneToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.codProdArmazenagem2
  )
  produtoArmazenagem: ProdutoArmazenagem;

  @ManyToOne(
    () => Armazenagem,
    (armazenagem) => armazenagem.produtoArmazenagems
  )
  @JoinColumn([
    { name: "Cod_Armazenagem", referencedColumnName: "codArmazenagem" },
  ])
  codArmazenagem: Armazenagem;

  @OneToMany(
    () => PurchaseOrderProduct,
    (purchaseOrderProduct) => purchaseOrderProduct.codArmazenagem
  )
  purchaseOrderProducts: PurchaseOrderProduct[];

  @OneToMany(
    () => RequisicaoProduto,
    (requisicaoProduto) => requisicaoProduto.codArmazenagem
  )
  requisicaoProdutos: RequisicaoProduto[];

  @OneToMany(
    () => SalesOrderProduct,
    (salesOrderProduct) => salesOrderProduct.codArmazenagem
  )
  salesOrderProducts: SalesOrderProduct[];

  @OneToMany(
    () => WorkOrderProduct,
    (workOrderProduct) => workOrderProduct.codArmazenagem
  )
  workOrderProducts: WorkOrderProduct[];
}
