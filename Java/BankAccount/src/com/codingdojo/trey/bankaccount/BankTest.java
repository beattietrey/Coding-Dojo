package com.codingdojo.trey.bankaccount;

public class BankTest {

	public static void main(String[] args) {
		BankAccount b1 = new BankAccount();
		BankAccount b2 = new BankAccount(100,100);
		
		System.out.println(b1.getAccountNumber());
		System.out.println(b2.getAccountNumber());
		
		System.out.println(b2.getCheckingBalance());
		
		b1.makeDepositChecking(200);
		b1.makeDepositSavings(300);
		System.out.println(b1.getTotalBalance());
		
		b1.makeWithdrawalSavings(400);
		
		b1.makeWithdrawalChecking(100);
		System.out.println(b1.getTotalBalance());

		System.out.println(BankAccount.getNumberOfAccounts());
	}

}
