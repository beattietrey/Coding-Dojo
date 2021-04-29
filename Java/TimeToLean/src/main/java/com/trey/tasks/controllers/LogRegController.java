package com.trey.tasks.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.trey.tasks.models.Task;
import com.trey.tasks.models.User;
import com.trey.tasks.services.TaskService;
import com.trey.tasks.services.UserService;
import com.trey.tasks.validators.UserValidator;

@Controller
public class LogRegController {
	private final UserService userService;
	private final UserValidator userValidator;
	private final TaskService taskService;

    public LogRegController(UserService userService, UserValidator userValidator,TaskService taskService) {
        this.userService = userService;
        this.userValidator= userValidator;
        this.taskService = taskService;
    }

    @GetMapping("/")
    public String base(HttpSession session) {
    	Long userID = (Long) session.getAttribute("user_id");
    	if(userID!=null) {
    		return "redirect:/home";
    	} else {
        return "redirect:/login";
    	}
    }

    @GetMapping("/login")
    public String login(@ModelAttribute("user") User user, HttpSession session) {
    	Long userID = (Long) session.getAttribute("user_id");
    	if(userID!=null) {
    		return "redirect:/home";
    	} else {
    		return "index.jsp";
    	}
    }

    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()) {
    		return "login.jsp";
    	} else {
    		User newUser = userService.registerUser(user);
    		session.setAttribute("user_id", newUser.getId());
    		return "redirect:/home";
    	}
    }
    
    @PostMapping("/login")
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	if(userService.authenticateUser(email, password)) {
    		session.setAttribute("user_id", userService.findByEmail(email).getId());
    		return "redirect:/home";
    	} else {
    		model.addAttribute("error", "Invalid credentials. Please try again.");
    		return "redirect:/login";
    	}
    }

    @GetMapping("/home")
    public String home(HttpSession session, Model model,@ModelAttribute("task")Task task) {
        // get user from session, save them in the model and return the home page
    	Long userID = (Long) session.getAttribute("user_id");
    	if(userID!=null) {
    		model.addAttribute("tasks", userService.findUserById(userID).getTasks());
	    	model.addAttribute("user", userService.findUserById(userID));
	    	return "homePage.jsp";
    	} else {
    		return "redirect:/login";
    	}
    }
    
    
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/login";
    }
}
