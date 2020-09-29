import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Ajuste } from "./Ajuste";
import { Produto } from "./Produto";

@Index("PK_Ajuste_sucata_produto", ["id"], { unique: true })
@Entity("Ajuste_sucata_produto", { schema: "dbo" })
export class AjusteSucataProduto {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "Nome_Produto", length: 50 })
  nomeProduto: string;

  @Column("int", { name: "Quantidade" })
  quantidade: number;

  @Column("int", { name: "Cod_Armazenamento_Entrada" })
  codArmazenamentoEntrada: number;

  @Column("int", { name: "Cod_Armazenamento_Saida" })
  codArmazenamentoSaida: number;

  @ManyToOne(() => Ajuste, (ajuste) => ajuste.ajusteSucataProdutos)
  @JoinColumn([{ name: "ID_Ajuste", referencedColumnName: "idAjuste" }])
  idAjuste: Ajuste;

  @ManyToOne(() => Produto, (produto) => produto.ajusteSucataProdutos)
  @JoinColumn([{ name: "ID_Produto", referencedColumnName: "idProduto" }])
  idProduto: Produto;
}
