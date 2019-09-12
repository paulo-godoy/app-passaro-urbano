import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

    public oferta: Oferta

    constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertasService
      ) { }

  ngOnInit() {
   this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
    .then(( oferta: Oferta ) => {
      this.oferta = oferta
    })


    let tempo = Observable.interval(200)

    tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  }

}
