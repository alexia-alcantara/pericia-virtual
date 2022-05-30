import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-laudo',
  templateUrl: './detalhe-laudo.component.html',
  styleUrls: ['./detalhe-laudo.component.css']
})
export class DetalheLaudoComponent implements OnInit {
  selectedCategory: any = null;
  categories: any[] = [
    { name: 'Aprovar Laudo' },
    { name: 'Rejeitar Laudo' },
  ];
  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }

}
