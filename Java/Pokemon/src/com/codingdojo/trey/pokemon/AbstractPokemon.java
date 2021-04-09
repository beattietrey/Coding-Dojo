package com.codingdojo.trey.pokemon;

public abstract class AbstractPokemon implements PokemonInterface {

	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		Pokemon newPokemon = new Pokemon(name, health, type);
		return newPokemon;
	}

	@Override
	public String pokemonInfo(Pokemon pokemon) {
		String name = pokemon.getName();
		int health = pokemon.getHealth();
		String type = pokemon.getType();
		return "Name: " + name + ". Health: " + health + ". Type: " + type;
	}

}
