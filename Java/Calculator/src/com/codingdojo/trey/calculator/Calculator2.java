package com.codingdojo.trey.calculator;
import java.util.ArrayList;

public class Calculator2 {
	private ArrayList<Double> Operands;
	private ArrayList<String> Modifiers;
	private Double result;
	
	
	public Calculator2() {
		this.setOperands(new ArrayList<Double>());
		this.setModifiers(new ArrayList<String>());
		this.setResult(null);
	}


	public void performOperation(Double number) {
		this.getOperands().add(number);
	}
	
	public void performOperation(int number) {
		Double newNum = (double) number;
		this.getOperands().add(newNum);
	}
	
	public void performOperation(String modifier) {
		this.getModifiers().add(modifier);
	}

	public Double getResult() {
		if(Modifiers.contains("=")) {
			Modifiers.remove(Modifiers.indexOf("="));
		}
		if(Modifiers.contains("*") || Modifiers.contains("/")) {
			for(int i = 0; i < Modifiers.size(); i++) {
				if(Modifiers.get(i) == "*") {
					Operands.set(i, Operands.get(i) * Operands.get(i+1));
					Operands.remove(i+1);
					Modifiers.remove(i);
					i--;
				} else if (Modifiers.get(i) == "/") {
					Operands.set(i, Operands.get(i) / Operands.get(i+1));
					Operands.remove(i+1);
					Modifiers.remove(i);
					i--;
				}
			}
		}
		for(int i = 0; i < Modifiers.size(); i++) {
			if(Modifiers.get(i) == "+") {
				Operands.set(i, Operands.get(i) + Operands.get(i+1));
				Operands.remove(i+1);
				Modifiers.remove(i);
				i--;
			} else if (Modifiers.get(i) == "-") {
				Operands.set(i, Operands.get(i) - Operands.get(i+1));
				Operands.remove(i+1);
				Modifiers.remove(i);
				i--;
			}
		}
		
		
		this.setResult(Operands.get(0));
		return result;
	}
	
	
	
	public ArrayList<Double> getOperands() {
		return Operands;
	}


	public void setOperands(ArrayList<Double> operands) {
		Operands = operands;
	}


	public ArrayList<String> getModifiers() {
		return Modifiers;
	}


	public void setModifiers(ArrayList<String> modifiers) {
		Modifiers = modifiers;
	}


	public void setResult(Double result) {
		this.result = result;
	}
}
