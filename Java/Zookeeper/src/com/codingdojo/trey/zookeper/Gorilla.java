package com.codingdojo.trey.zookeper;

public class Gorilla extends Mammal{
	
	
	public void throwSomething() {
		System.out.println("The Gorilla has thrown something!");
		this.setEnergyLevel(this.displayEnergy()-5);
	}
	
	public void eatBananas() {
		System.out.println("The Gorilla liked that banana!");
		this.setEnergyLevel(this.displayEnergy()+10);
	}
	
	public void climb() {
		System.out.println("The Gorilla is now in a tree!");
		this.setEnergyLevel(this.displayEnergy()-10);
	}
}
