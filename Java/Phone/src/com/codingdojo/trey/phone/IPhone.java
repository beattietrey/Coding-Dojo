package com.codingdojo.trey.phone;

public class IPhone extends Phone implements Ringable {
	
	public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
		super(versionNumber,batteryPercentage,carrier,ringTone);
	}

	@Override
	public String ring() {
//		System.out.println("https://www.youtube.com/watch?v=1GBAEmmvAfM");
		return "iPhone " + this.getVersionNumber() + " says " + this.getRingTone();
	}

	@Override
	public String unlock() {
//		System.out.println("Don't worry, we won't use the facial recognition for evil...");
		return "Unlocking via facial recognition";
	}

	@Override
	public void displayInfo() {
		System.out.println("iPhone " + this.getVersionNumber() + " from " + this.getCarrier());
	}

}
