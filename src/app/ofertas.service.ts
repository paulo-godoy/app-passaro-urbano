import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}



    public getOfertas(): Promise<Oferta[]> {
        //Efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retornar uma promise Ofertas[]
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
      return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
      return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0]
      })
    }
}
