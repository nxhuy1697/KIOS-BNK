// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs";
// import { GlobalVariable } from "../../store/global.variable";
// import { Router } from "@angular/router";
// import { CommandURL } from "../api-commands";
// @Injectable({
//   providedIn: 'root'
// })

// export class PermissionService {
//   user: any;
    
//   constructor(
//       private http: HttpClient,
//       private router: Router,
//   ){}

//   public currentUser() {
//       if (!GlobalVariable.getAuth().currentUser) {
//           GlobalVariable.restoreAuth();
//       }
//       this.user = GlobalVariable.getAuth().currentUser;
//       return this.user;
//   }

//   login(json: any) {
//       return this.http.post<any>(CommandURL.LOGIN, json)
//           .pipe(map(data => {
//               if(data && data.token){
//                   sessionStorage.setItem("X-Token", data.token);
//                   const authenticationData = {
//                       currentUser: {
//                           username: data.users.username,
//                           password: data.users.password
//                           // role: data.user.role
//                       }
//                   }
//                   GlobalVariable.setAuth(authenticationData);
//                   // sessionStorage.setItem("user", base64EncodeUnicode(JSON.stringify(authenticationData)))
//               }
//               return data.user;
//           }))
//   }

//   logout() {
//       GlobalVariable.clearVariables();
//       // localStorage.removeItem('note');
//       this.user = null;
//       this.router.navigate(['/account/auth/login']);
//       // this.user = null;
//   }
// }
