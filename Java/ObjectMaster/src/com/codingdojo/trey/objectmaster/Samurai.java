package com.codingdojo.trey.objectmaster;

public class Samurai extends Human {
	public static int count = 0;
	
	public Samurai() {
		count++;
		this.setHealth(200);
	}
	
	public void deathBlow(Human target) {
		target.setHealth(0);
		this.setHealth(this.getHealth()/2);
	}
	
	public void meditate() {
		this.setHealth(this.getHealth()*2);
	}

	public static int howMany() {
		return count;
	}
}
