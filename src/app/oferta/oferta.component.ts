import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';
import {  Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

    public tempoObservableSubscription: Subscription
    public meuObservableTesteSubscription: Subscription

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

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
     console.log(intervalo)
     })

    //observable (observavel)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
    })

    //observable (observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('O evento foi finalizado')
    )
  }

  ngOnDestroy(){
    this.tempoObservableSubscription.unsubscribe()
    this.meuObservableTesteSubscription.unsubscribe()
  }

}
