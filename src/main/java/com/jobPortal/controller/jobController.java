package com.jobPortal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class jobController {




    @GetMapping("/jobList")
    public String jobController(){
        return "jobList";
    }


}
