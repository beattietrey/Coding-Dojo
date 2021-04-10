package com.codingdojo.trey.calculator;

public class Calculator2Test {

	public static void main(String[] args) {
		Calculator2 c = new Calculator2();
		
		c.performOperation(10.5);
		System.out.println(c.getOperands());
		
		c.performOperation(10);
		System.out.println(c.getOperands());
		
		c.performOperation("+");
		System.out.println(c.getModifiers());
	}

}
