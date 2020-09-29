import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Deposito } from "./Deposito";
import { Filial } from "./Filial";
import { Local } from "./Local";
import { ProdutoArmazenagem } from "./ProdutoArmazenagem";

@Index("PK_Armazenagem", ["codArmazenagem"], { unique: true })
@Entity("Armazenagem", { schema: "dbo" })
export class Armazenagem {
  @Column("int", { primary: true, name: "Cod_armazenagem" })
  codArmazenagem: number;

  @OneToOne(() => Armazenagem, (armazenagem) => armazenagem.armazenagem)
  @JoinColumn([
    { name: "Cod_armazenagem", referencedColumnName: "codArmazenagem" },
  ])
  codArmazenagem2: Armazenagem;

  @OneToOne(() => Armazenagem, (armazenagem) => armazenagem.codArmazenagem2)
  armazenagem: Armazenagem;

  @ManyToOne(() => Deposito, (deposito) => deposito.armazenagems)
  @JoinColumn([
    { name: "Cod_Deposito", referencedColumnName: "idDeposito" },
    { name: "Nome_Deposito", referencedColumnName: "nomeDeposito" },
  ])
  deposito: Deposito;

  @ManyToOne(() => Filial, (filial) => filial.armazenagems)
  @JoinColumn([
    { name: "Cod_Filial", referencedColumnName: "codFilial" },
    { name: "Nome_Filial", referencedColumnName: "nomeFilial" },
  ])
  filial: Filial;

  @ManyToOne(() => Local, (local) => local.armazenagems)
  @JoinColumn([
    { name: "Cod_Local", referencedColumnName: "idLocal" },
    { name: "Nome_Local", referencedColumnName: "nomeLocal" },
  ])
  local: Local;

  @OneToMany(
    () => ProdutoArmazenagem,
    (produtoArmazenagem) => produtoArmazenagem.codArmazenagem
  )
  produtoArmazenagems: ProdutoArmazenagem[];
}
