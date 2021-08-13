import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BasicAuthenticationService } from '../basic-authentication.service';


export class UserCredentials{
  userId:string;
  password:string;
  constructor(id:string,pass:string)
  {
    this.userId=id;
    this.password=pass;
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidCredentials:boolean=false;
  userId:any="";
  password:any="";
  userCredentials:UserCredentials;


  constructor(private service:BasicAuthenticationService,
    private route:Router) { }

  ngOnInit(): void {
  }
  handleJWTAuthentication()
  {
    this.userCredentials=new UserCredentials(this.userId,this.password);
    console.log(this.userCredentials);
    this.service.executeJWTAuthenticationService(this.userCredentials).subscribe(
      data=>{
        console.log(`this is the data in handleJWTAUTHENTICATION function ${data.token}`);
        this.service.userLoggedIn=true;
        this.route.navigate(['home']);
      },
      error=>
      {
        this.invalidCredentials=true;
        console.log("wrong credentials");
      }
    )
    // if(this.service.isUserLoggedIn())
    // {
    //   this.route.navigate(['home']);
    // }

  }

}
