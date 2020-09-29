import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { WorkOrder } from "./WorkOrder";
import { Status } from "./Status";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";
import { Produto } from "./Produto";

@Index("PK_Work_Order_Product", ["id"], { unique: true })
@Entity("Work_Order_Product", { schema: "dbo" })
export class WorkOrderProduct {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("int", { name: "Nome_Produto" })
  nomeProduto: number;

  @Column("int", { name: "Quantidade_Produzir" })
  quantidadeProduzir: number;

  @ManyToOne(() => WorkOrder, (workOrder) => workOrder.workOrderProducts)
  @JoinColumn([
    { name: "ID_Ordem", referencedColumnName: "idOrdem" },
    {
      name: "Numero_Ordem_Fabricacao",
      referencedColumnName: "numeroOrdemFabricacao",
    },
  ])
  workOrder: WorkOrder;

  @ManyToOne(() => Status, (status) => status.workOrderProducts)
  @JoinColumn([
    { name: "Status_ordem_Fabricacao", referencedColumnName: "idStatus" },
  ])
  statusOrdemFabricacao: Status;

  @ManyToOne(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.workOrderProducts
  )
  @JoinColumn([
    { name: "Cod_Armazenagem", referencedColumnName: "codProdArmazenagem" },
  ])
  codArmazenagem: ProdutoArmazenagem;

  @ManyToOne(() => Produto, (produto) => produto.workOrderProducts)
  @JoinColumn([{ name: "ID_produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;
}
