import { Component, OnInit } from '@angular/core';
// importamos el sevicio
import {PokemonServiceService} from 'src/app/services/pokemon-service.service';
// importamos la interface
import {PokemonInterface} from 'src/app/interfaces/pokemon-interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // creamos una variable que tendra la interface
  pokemon: PokemonInterface[];
  constructor(pokemonServiceService: PokemonServiceService) {
      pokemonServiceService.getAllPokemon().subscribe((data: PokemonInterface[]) => {this.pokemon = data['results'] });
    }

  ngOnInit() {
  }

}
