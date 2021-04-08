package com.codingdojo.trey.zookeper;

public class Bat extends Mammal {
	public Bat() {
		this.setEnergyLevel(300);
	}
	
	public void fly() {
		System.out.println("Woosh!");
		this.setEnergyLevel(this.displayEnergy()-50);
	}
	
	public void eatHumans() {
		this.setEnergyLevel(this.displayEnergy()+25);
	}
	
	public void attackTown() {
		System.out.println("AGGHHH!!!!! EEEEKKK!!!!! SIZZLE!!!!! WOOSH!!!!");
		this.setEnergyLevel(this.displayEnergy()-100);
	}
}
