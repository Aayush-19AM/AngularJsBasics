import { Component } from "@angular/core";

@Component({
    selector:'app-navbar',
    standalone:true,
    template:`<h1>Navbar Component</h1>
    <p>Dummy Paragraph</p>`,
    // styles:[`h1{
    //      color:red;
    //      background-color:black; 
    //      }
    //      `],
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class AppNavbar{}