package com.codingdojo.trey.zookeper;

public class Mammal {
	private int energyLevel = 100;
	
	public int displayEnergy() {
		System.out.println(this.energyLevel);
		return this.energyLevel;
	}
	
	public void setEnergyLevel(int amount) {
		this.energyLevel= amount;
	}
}
