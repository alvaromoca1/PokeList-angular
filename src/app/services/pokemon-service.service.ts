import { Injectable } from '@angular/core';
// añadimos el http para conectarnos
import {HttpClient, HttpHeaders} from '@angular/common/http';
// añadimos el map para navegar en el json
import {map} from 'rxjs/operators';
import {PokemonInterface} from '../interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor( private http: HttpClient) { }

  // creamos la funcion que nos permitira consmir la api
  getAllPokemon() {
    const urlapi = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=200';
    return this.http.get(urlapi);
  }
}
