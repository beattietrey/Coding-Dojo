package com.codingdojo.trey.phone;

public class Galaxy extends Phone implements Ringable {

	public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
        
	}
	
	@Override
	public String ring() {
//		System.out.println("https://www.youtube.com/watch?v=P-vlQmGYwoU");
		return "Galaxy " + this.getVersionNumber() + " says " + this.getRingTone();
	}

	@Override
	public String unlock() {
//		System.out.println("We will definitely use the facial recognition for evil, but at least we won't lie about it.");
		return "Unlocking via finger print";
	}

	@Override
	public void displayInfo() {
		System.out.println("Galaxy " + this.getVersionNumber() + " from " + this.getCarrier());
	}

}
