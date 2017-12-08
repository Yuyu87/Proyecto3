import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', /*directorio de la carpeta*/
  templateUrl: './home.component.html', /*directorio y nombre de archivo*/
  styleUrls: ['./home.component.css']  /*directorio y nombre de archivo*/
})
export class HomeComponent implements OnInit { /*nombre que le quiero dar al componente*/

  constructor() { }

  ngOnInit() {
  }

}
