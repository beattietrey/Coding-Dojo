package com.codingdojo.trey.bankaccount;
import java.util.Random;

public class BankAccount {
	private String accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	private double totalBalance= 0.00;
	
	private static int numberOfAccounts = 0;
	
	public BankAccount() {
		this.setAccountNumber(randomNumber());
		this.setCheckingBalance(0);
		this.setSavingsBalance(0);
		numberOfAccounts++;
	}
	
	public BankAccount(double checkingBalance, double savingsBalance) {
		this.setAccountNumber(randomNumber());
		this.setCheckingBalance(checkingBalance);
		this.setSavingsBalance(savingsBalance);
		numberOfAccounts++;
		this.setTotalBalance(this.getTotalBalance() + checkingBalance + savingsBalance);
	}

	public void makeDepositChecking(double amount) {
		this.setCheckingBalance(this.getCheckingBalance() + amount);
		this.setTotalBalance(this.getTotalBalance() + amount);
	}
	
	public void makeDepositSavings(double amount) {
		this.setSavingsBalance(this.getSavingsBalance() + amount);
		this.setTotalBalance(this.getTotalBalance() + amount);
	}
	
	public void makeWithdrawalChecking(double amount) {
		if(this.getCheckingBalance() > amount) {
			this.setCheckingBalance(this.getCheckingBalance() - amount);
			this.setTotalBalance(this.getTotalBalance() - amount);
		} else {
			System.out.println("Insufficient Funds");
		}
	}
	
	public void makeWithdrawalSavings(double amount) {
		if(this.getSavingsBalance() > amount) {
			this.setSavingsBalance(this.getSavingsBalance() - amount);
			this.setTotalBalance(this.getTotalBalance() - amount);
		} else {
			System.out.println("Insufficient Funds");
		}
	}
	
	private String randomNumber() {
		Random r = new Random();
		String accountNumber = "";
		for(int i = 0; i < 10; i++) {
			int number = r.nextInt(10);
			accountNumber = accountNumber.concat(String.valueOf(number));
		}
		return accountNumber;
	}
	
	
	
	
	
//	Getter/Setter
	public double getTotalBalance() {
		return totalBalance;
	}

	public void setTotalBalance(double totalBalance) {
		this.totalBalance = totalBalance;
	}

	public static int getNumberOfAccounts() {
		return numberOfAccounts;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getCheckingBalance() {
		return checkingBalance;
	}

	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}

	
}
