import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/modules/auth.service";
// import { PermissionService } from "src/app/services/permission/permission.service";
import { User } from "src/assets/models/users";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    // private permisson : PermissionService
    private toastService : ToastrService
  ) {}
  userForm:any = this.fb.group({
    userName: ['', []],
    password: ['', []],
  });
  get userName() {
    return this.userForm.get('userName');
  }

  get password() {
    return this.userForm.get('password');

  }

  onSubmit() {
    this.authService.login(this.user).subscribe((res) => {
      if (res) {
        this.toastService.success(res.errorDesc, "Thông báo");
        this.router.navigate(['/dashboard']);
      } else {
        this.toastService.error(res.errorDesc, "Thông báo");
      }
    });
  }

  ngOnInit() {}
 
}
