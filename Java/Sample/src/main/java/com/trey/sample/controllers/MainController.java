package com.trey.sample.controllers;

@Controller
public class MainController {
	
	@Autowired
	private SampleService sampleService;
	
	
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
}
