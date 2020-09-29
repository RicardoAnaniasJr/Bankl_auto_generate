import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Funcionario } from "./Funcionario";
import { RequisicaoProduto } from "./RequisicaoProduto";

@Index("PK_Ordem_Requisicao_Interna", ["idRequisicao", "numeroRequisicao"], {
  unique: true,
})
@Entity("Ordem_Requisicao_Interna", { schema: "dbo" })
export class OrdemRequisicaoInterna {
  @Column("int", { primary: true, name: "ID_Requisicao" })
  idRequisicao: number;

  @Column("int", { primary: true, name: "Numero_Requisicao" })
  numeroRequisicao: number;

  @ManyToOne(
    () => Funcionario,
    (funcionario) => funcionario.ordemRequisicaoInternas
  )
  @JoinColumn([
    { name: "ID_funcionario", referencedColumnName: "idFuncionario" },
  ])
  idFuncionario: Funcionario;

  @OneToMany(
    () => RequisicaoProduto,
    (requisicaoProduto) => requisicaoProduto.ordemRequisicaoInterna
  )
  requisicaoProdutos: RequisicaoProduto[];
}
