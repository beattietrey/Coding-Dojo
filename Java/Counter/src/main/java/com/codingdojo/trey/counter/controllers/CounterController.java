package com.codingdojo.trey.counter.controllers;


import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CounterController {
	
	
	@RequestMapping("/")
	public String index(Model model, HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if(count == null) {
			count = 1;
		} else {
			count+=1;
		}
		session.setAttribute("count", count);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(Model model, HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if(count==null) {
			count = 0;
		}
		model.addAttribute("count", count);
		return "counter.jsp";
	}
	
	@RequestMapping("/counter2")
	public String counterPlusTwo(Model model, HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if(count == null) {
			count = 2;
		} else {
			count+=2;
		}
		session.setAttribute("count", count);
		return "redirect:/counter";
	}
	
	@RequestMapping("/reset")
	public String reset(Model model, HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		count = 0;
		session.setAttribute("count", count);
		return "redirect:/counter";
	}
}
