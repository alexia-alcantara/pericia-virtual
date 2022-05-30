import { Component, OnInit } from '@angular/core';
import { AvaliarLaudo } from 'src/app/components/models/laudosAvaliar';
import { LaudoConcluido } from 'src/app/components/models/laudosConcluidos';

@Component({
  selector: 'app-laudos',
  templateUrl: './laudos.component.html',
  styleUrls: ['./laudos.component.css']
})
export class LaudosComponent implements OnInit {
  stateOptions: any[];
  value1: string = "off";
  value3: string;


  div1: boolean = true;
  div2: boolean = true;

  listaLaudos: AvaliarLaudo[];
  colunas: any[];

  laudosConcluidos: LaudoConcluido[];
  colunas2: any[];


  div1Function() {
    this.div1 = true;
    this.div2 = false;
  }

  div2Function() {
    this.div2 = true;
    this.div1 = false;
  }

  constructor() {
    this.stateOptions = [{ label: 'Off', value: 'off' }, { label: 'On', value: 'on' }];
  }

  ngOnInit(): void {
    this.setColuns();
    this.listarLaudos();
    this.setColuns2();
    this.listarLaudosConcluidos();
  }


  private listarLaudos() {
    this.listaLaudos = [
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        diverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        show: ""
      },

    ]
  }

  private setColuns() {
    this.colunas = [
      {
        header: "Data da solicitação",
        field: "date"
      },
      {
        header: "Nº do protocolo",
        field: "protocolo"
      },
      {
        header: "Nome do condutor",
        field: "name"
      },
      {
        header: "Placa",
        field: "placa"
      },
      {
        header: "Categoria",
        field: "category"
      },
      {
        header: "Data da entrega",
        field: "dataEntrega"
      },
      {
        header: "Data da resposta",
        field: "dataResposta"
      },
      {
        header: "",
        field: "show"
      },
    ]
  }

  private listarLaudosConcluidos() {
    this.laudosConcluidos = [
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        diverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        status: "Aprovado",
        show: ""
      },

    ]
  }

  private setColuns2() {
    this.colunas2 = [
      {
        header: "Data da solicitação",
        field: "date"
      },
      {
        header: "Nº do protocolo",
        field: "protocolo"
      },
      {
        header: "Nome do condutor",
        field: "name"
      },
      {
        header: "Placa",
        field: "placa"
      },
      {
        header: "Categoria",
        field: "category"
      },
      {
        header: "Data da entrega",
        field: "dataEntrega"
      },
      {
        header: "Data da resposta",
        field: "dataResposta"
      },
      {
        header: "Status",
        field: "status"
      },
      {
        header: "",
        field: "show"
      },
    ]
  }

}
