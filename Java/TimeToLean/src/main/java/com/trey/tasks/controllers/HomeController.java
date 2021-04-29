package com.trey.tasks.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.trey.tasks.models.Task;
import com.trey.tasks.models.User;
import com.trey.tasks.services.TaskService;
import com.trey.tasks.services.UserService;

@Controller
@RequestMapping("/home")
public class HomeController {
	private final UserService userService;
	private final TaskService taskService;

    public HomeController(UserService userService,TaskService taskService) {
        this.userService = userService;
        this.taskService = taskService;
    }
    
    @PostMapping("/newTask")
    public String create(@Valid @ModelAttribute("task") Task task, BindingResult result, HttpSession session,Model model) {
    	Long userID = (Long) session.getAttribute("user_id");
 		if(userID!=null) {
			if(result.hasErrors()) {	 
				User user = userService.findUserById(userID);
				model.addAttribute("tasks", user.getTasks());
		    	model.addAttribute("user", user);
 				return "homePage.jsp";
 			} else {
 				task.setCreator(userService.findUserById(userID));
 				taskService.createTask(task);
 				return "redirect:/home";
 			}
 		} else {
 	        return "index.jsp";
 		}
 	}
    
}