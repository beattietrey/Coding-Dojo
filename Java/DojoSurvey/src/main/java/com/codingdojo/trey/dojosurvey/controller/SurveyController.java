package com.codingdojo.trey.dojosurvey.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class SurveyController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(value="/result", method=RequestMethod.POST)
	public String add(Model model, @RequestParam(value="name") String name, 
			@RequestParam(value="location") String location,
			@RequestParam(value="language") String language,
			@RequestParam(value="comments") String comments) {
		model.addAttribute("name", name);
		model.addAttribute("location", location);
		model.addAttribute("language", language);
		model.addAttribute("comments", comments);
		if(language.equalsIgnoreCase("Java")) {
			return "java.jsp";
		} else {
		return "result.jsp";
		}
	}
	
	
}
