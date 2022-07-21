import { Component, ViewChild, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Customer, Representative } from 'src/app/components/models/customer';
import { CustomerService } from 'src/app/components/models/customerservice';
import { AvaliarLaudo } from 'src/app/components/models/laudosAvaliar';
import { LaudoConcluido } from 'src/app/components/models/laudosConcluidos';

@Component({
  selector: 'app-laudos',
  templateUrl: './laudos.component.html',
  styleUrls: ['./laudos.component.css'],
  providers: [MessageService]
})
export class LaudosComponent implements OnInit {
  stateOptions: any[];
  value1: string = "off";
  value3: string;

  listaLaudos: AvaliarLaudo[];
  colunas: any[];

  laudosConcluidos: LaudoConcluido[];
  colunas2: any[];

  selectedLaudo = 'avaliar';

  typeLaudo(laudo: string) {
    this.selectedLaudo = laudo;
  }


  customers: Customer[];
  loading: boolean = true;
  representatives: Representative[];

  statuses: any[];
  activityValues: number[] = [0, 100];



  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        customer => (customer.date = new Date(customer as Date))
      );
    });

    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" }
    ];

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];


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
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
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
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        status: "Aprovado",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        status: "Aprovado",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        status: "Aprovado",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
        board: "Placa",
        category: "Seguradora",
        deliveryDate: "dd/mm/aaaa",
        answerDate: "dd/mm/aaaa",
        status: "Aprovado",
        show: ""
      },
      {
        date: "dd/mm/aaaa",
        protocolNumber: "000000",
        driverName: "Nome",
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
