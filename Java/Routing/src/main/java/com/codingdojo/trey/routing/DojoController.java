package com.codingdojo.trey.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class DojoController {
	
	@RequestMapping("/{track}")
	public String dojo(@PathVariable("track") String track) {
		System.out.println(track);
		if(track.equals("dojo")) {
			System.out.println("This one is Dojo");
			return "The dojo is awesome!";
		} else if (track.equals("burbank-dojo")){
			return "Burbank Dojo is located in Southern California";
		} else if (track.equals("san-jose")) {
			return "SJ dojo is the headquarters";
		} 
			else {
			System.out.println("This one keeps happening");
			return "Dojo, you know!";
		}
	}
	
	
}
