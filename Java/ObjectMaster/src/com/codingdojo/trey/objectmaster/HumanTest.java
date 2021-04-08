package com.codingdojo.trey.objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human todd = new Human();
		Human steven = new Human();
		
		System.out.println(todd.getHealth());
		todd.setIntelligence(5);
		todd.setStealth(5);
		todd.setStrength(5);
		
		System.out.println(todd.getStrength());

		
		
		todd.attack(steven);
		System.out.println(steven.getHealth());

		
	}

}
