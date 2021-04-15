package com.codingdojo.trey.displaydate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	java.util.Date date = new java.util.Date();
	  
	DateTimeFormatter weekday = DateTimeFormatter.ofPattern("EEEE', the 'dd' of ' MMMM, YYYY"); 

	DateTimeFormatter time = DateTimeFormatter.ofPattern("hh:mm a");
	LocalDateTime now = LocalDateTime.now();  
	          
	
	@RequestMapping("/")
	public String index(Model model) {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		model.addAttribute("weekday",weekday.format(now));
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		model.addAttribute("time",time.format(now));
		return "time.jsp";
	}
	
}
