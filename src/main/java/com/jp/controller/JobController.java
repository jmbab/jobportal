package com.jp.jobportal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JobController {


    @GetMapping("/jobList")
    public String jobList(){
        return "joblist";
    }
}
