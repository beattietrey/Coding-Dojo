package com.codingdojo.trey.thecode.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
public class CodeController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/code")
	public String code(HttpSession session) {
		if(session.getAttribute("allowed").equals("true")) {
			return "code.jsp";			
		} else {
			return "redirect:/redirectError";
		}
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
    public String login(@RequestParam(value="the_code") String code, HttpSession session) {
		String passcode = "Bushido";
		System.out.println(code);
		if(code.equalsIgnoreCase(passcode)) {
			session.setAttribute("allowed", "true");
			return "redirect:/code";
		}
		else {
		return "redirect:/loginError";
		}
	}
	
    @RequestMapping("/redirectError")
    public String redirectError(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", "Must enter code first!");
        return "redirect:/";
    }
    
    @RequestMapping("/loginError")
    public String loginError(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", "You must train harder!");
        return "redirect:/";
    }
    
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		session.setAttribute("allowed", "false");
		return "redirect:/";
	}
    
}
