import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserCredentials } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  userLoggedIn=false;
  constructor(private http:HttpClient) { }
  
  // executeJWTAuthenticationService(userCredentials:UserCredentials) {
    
  //   return this.http.post<any>(
  //     `${"http://localhost:8080"}/authenticate`,{
  //       userCredentials
  //     }).pipe(
  //       map(
  //         data => {
  //           sessionStorage.setItem("authenticaterUser", userCredentials.userId);
  //           sessionStorage.setItem("token", `Bearer ${data.token}`);
  //           console.log(data);
  //           return data;
  //         }
  //       )
  //     );
  //   //console.log("Execute Hello World Bean Service")
  // }
  executeJWTAuthenticationService(userCredentials:UserCredentials)
  {
    return this.http.post<any>(`http://localhost:8080/login`,userCredentials).pipe(
      map(data=>{
        sessionStorage.setItem("authenticaterUser",userCredentials.userId);
        //sessionStorage.setItem("token",`Bearer ${data.token}`);
        sessionStorage.setItem("token",`${data.token}`);
        console.log(data);
        return data;
      })
    );
  }
  // isUserLoggedIn()
  // {
  //   let user=sessionStorage.getItem("authenticaterUser");
  //   return !(user===null);
  // }
  // logout()
  // {
  //   sessionStorage.removeItem("authenticaterUser");
  //   sessionStorage.removeItem("token");
  // }
}


