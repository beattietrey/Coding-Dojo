package com.codingdojo.trey.pokemon;
import java.util.ArrayList;

public class Pokedex extends AbstractPokemon implements PokemonInterface {
	
	private ArrayList<Pokemon> myPokemon = new ArrayList<Pokemon>();

	@Override
	public void listPokemon() {
		for(Pokemon pokemon: this.myPokemon ) {
			System.out.println(pokemon.getName());
		}
	}
	
	public void addToPokedex(Pokemon pokemon) {
		myPokemon.add(pokemon);
	}

}
