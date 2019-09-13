import { Observable } from 'rxjs/Observable';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public SubjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.SubjectPesquisa //retorno ofertas[]
      .switchMap((termoDaBusca: string) => {
        console.log('requisisão api', termoDaBusca)
         return this.ofertasService.pesquisaOfertas(termoDaBusca)
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup', termoDaBusca)
    this.SubjectPesquisa.next(termoDaBusca)
  }

}
