
import { Component } from '@angular/core';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppNavbar,HeaderComponent,FormsModule,NgIf,NgTemplateOutlet,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  // title:string="first angular app";
  // imgUrl:string='data:image/png;base64,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'
  // isDisabled:boolean=true;
  // isActive:boolean=false;
  // fruitName:string="Apple";

  // userName:string="Aayush";

  // textValue:string="One way data binding"

  // onKeyUp(){
  //   console.log(this.textValue);
  // }

  // buttonClicked(){
  //   console.log("Clicked")
  // }
  // keyEnter(event:object){
  //   console.log('Key enterd')
  // }

  // keyUpFiltering(user:HTMLInputElement){
  //   console.log(user.value)
  // }

  // updateUserName(username:HTMLInputElement){
  //     this.userName=username.value;
  //     console.log(username.value);
  // }


// DIRECTIVES
// isLoggedIn:boolean=false;
// userName:string="Aayush";

// clickedLogin:number=0;
// isClickedLogIn(){
// this.clickedLogin++;
// console.log(this.clickedLogin);
// }

// userRole:string="Admi";

// loginCount:number=0;
// TotalClicks(){
//   this.loginCount++;
//   console.log(this.loginCount);
// }

// NgFor
// users:Array<string>=['ram',"bam","sham","dam"];

// usersObj:Array<any>=[
//   {id:1,name:'Aayush',email:'aayush@gmail.com'},
//   {id:2,name:'ram',email:'ram@gmail.com'},
//   {id:3,name:'sham',email:'sham@gmail.com'},
//   {id:4,name:'bam',email:'bam@gmail.com'},
// ]

// addNewUser(){
//   let user={id:5,name:'dm',email:'m@gmail.com'};
//   this.usersObj.push(user);
//   // this.usersObj=[...this.usersObj,user];
// }
// deleteObj(user:Object){
//   let index=this.usersObj.indexOf(user);
//   this.usersObj.splice(index,1);
//   console.log(index);
// }
// deleteObj(index:number){
// this.usersObj.splice(index,1);
// }


userRole:string="Editr";
}
