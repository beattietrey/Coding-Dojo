package com.codingdojo.trey.calculator;

public class Calculator2Test {

	public static void main(String[] args) {
		Calculator2 c = new Calculator2();
		
		c.performOperation(10.5);
		c.performOperation("+");
		c.performOperation(5.2);		
		c.performOperation("*");		
		c.performOperation(10);
		c.performOperation("=");
		System.out.println(c.getResult());
	}

}
