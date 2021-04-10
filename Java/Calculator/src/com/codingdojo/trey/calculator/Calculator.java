package com.codingdojo.trey.calculator;

public class Calculator {
	private Double OperandOne;
	private Double OperandTwo;
	private String Operation;
	private String equation;
	private Double result;
	



	public Calculator() {
		this.setEquation(null);
		this.setOperandOne(null);
		this.setOperandTwo(null);
		this.setOperation(null);
	}
	
	public void performOperation() {
		if(this.getOperandOne() != null && this.getOperation() != null && this.getOperandTwo() != null) {
			if(this.getOperation() == "+") {
				this.setResult(Double.valueOf(this.getOperandOne()) + Double.valueOf(this.getOperandTwo()));
			} else if(this.getOperation() == "-") {
				this.setResult(Double.valueOf(this.getOperandOne()) - Double.valueOf(this.getOperandTwo()));
			} else if(this.getOperation() == "/") {
				this.setResult(Double.valueOf(this.getOperandOne()) / Double.valueOf(this.getOperandTwo()));
			} else if(this.getOperation() == "*") {
				this.setResult(Double.valueOf(this.getOperandOne()) * Double.valueOf(this.getOperandTwo()));
			}
		}
	}
	
	
	public void clear() {
		this.setResult(null);
	}
	
	public double getResult() {
		this.setEquation(null);
		this.setOperandOne(null);
		this.setOperandTwo(null);
		this.setOperation(null);
		return result;
	}



	public void setResult(Double result) {
		this.result = result;
	}

	
	
	public String getEquation() {
		return equation;
	}

	public void setEquation(String equation) {
		this.equation = equation;
	}




	public String getOperation() {
		return Operation;
	}




	public void setOperation(String operation) {
		Operation = operation;
	}

	public Double getOperandOne() {
		return OperandOne;
	}

	public void setOperandOne(Double operandOne) {
		OperandOne = operandOne;
	}

	public Double getOperandTwo() {
		return OperandTwo;
	}

	public void setOperandTwo(Double operandTwo) {
		OperandTwo = operandTwo;
	}
	
	
}
