import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alert: string = 'alert-danger';
  loading: boolean = false;

  propiedades: object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    console.log('Cargando...');
    setTimeout( () => this.loading = false, 3000 );
  }

}
