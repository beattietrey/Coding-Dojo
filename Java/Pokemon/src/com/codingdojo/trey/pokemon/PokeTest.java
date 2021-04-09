package com.codingdojo.trey.pokemon;

public class PokeTest {

	public static void main(String[] args) {
		
		Pokemon bulbasaur = new Pokemon("Bulbasaur", 30, "Grass");
		Pokemon charmander = new Pokemon("Charmander", 30, "Fire");
		Pokemon squirtle = new Pokemon("Squirtle", 30, "Water");
		
		Pokedex myPokedex = new Pokedex();
		
		myPokedex.addToPokedex(squirtle);
		myPokedex.addToPokedex(bulbasaur);
		myPokedex.addToPokedex(charmander);
		
		myPokedex.addToPokedex(myPokedex.createPokemon("Pikachu", 30, "Electric"));
		
		myPokedex.listPokemon();
		
		bulbasaur.attackPokemon(squirtle);
		
		System.out.println(myPokedex.pokemonInfo(squirtle));

		
		
		
		
		
		
	}

}
