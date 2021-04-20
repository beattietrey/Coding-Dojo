package com.trey.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.trey.authentication.models.User;
import com.trey.authentication.services.UserService;
import com.trey.authentication.validator.UserValidator;

@Controller
public class Users {
private final UserService userService;
private final UserValidator userValidator;

    
    public Users(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator= userValidator;
    }
    
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()) {
    		return "registrationPage.jsp";
    	} else {
    		User newUser = userService.registerUser(user);
    		session.setAttribute("user_id", newUser.getId());
    		return "redirect:/home";
    	}
        // if result has errors, return the registration page (don't worry about validations just now)
        // else, save the user in the database, save the user id in session, and redirect them to the /home route
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	if(userService.authenticateUser(email, password)) {
    		session.setAttribute("user", userService.findByEmail(email));
    		return "redirect:/home";
    	} else {
    		model.addAttribute("error", "Invalid credentials. Please try again.");
    		return "redirect:/login";
    	}
    }
    
    @RequestMapping("/home")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
    	Long userID = (Long) session.getAttribute("user_id");
    	model.addAttribute("user", userService.findUserById(userID));
    	return "homePage.jsp";
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/login";
        // invalidate session
        // redirect to login page
    }
}
