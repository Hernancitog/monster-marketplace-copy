import { Component, OnInit } from '@angular/core';
import { Location} from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private location: Location,
              private router: Router) { }

    loginCheck(){
    if(this.username == 'mlopez' && this.password == 'password'){
          this.router.navigate(['summary']);
  }else{
    alert("Invalid credentials. Please try again.")
  }
 }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

}
