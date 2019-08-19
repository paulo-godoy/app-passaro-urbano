import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  constructor( private ofertasService: OfertasService) { }

  ngOnInit() {
    console.log(this.ofertasService.getOfertas())
  }

}
