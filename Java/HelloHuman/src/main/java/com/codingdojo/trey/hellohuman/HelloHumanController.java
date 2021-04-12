package com.codingdojo.trey.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController


public class HelloHumanController {
	@RequestMapping("/")
	public String hello(@RequestParam(value="first_name", required = false)String fName, @RequestParam(value="last_name", required = false)String lName) {
		if(fName == null && lName == null) {
			return "Hello Human";
		} else if(fName == null) {
			return "Hello Mr/Ms/Mx " + lName;
		} else if(lName == null) {
			return "Hello " + fName;
		} else {
		return "Hello " + fName + " " + lName;
		}
	}
}
