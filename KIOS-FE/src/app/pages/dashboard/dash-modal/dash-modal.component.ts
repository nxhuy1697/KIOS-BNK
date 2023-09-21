import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/modules/auth.service";
import { User } from "src/assets/models/users";
import Swal from 'sweetalert2';


@Component({
  selector: "app-dash-modal",
  templateUrl: "./dash-modal.component.html",
  styleUrls: ["./dash-modal.component.scss"],
})
export class DashModalComponent implements OnInit {
  form: FormGroup;
  isSubmit: boolean = false;
 
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}

  initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    this.isSubmit = true;
    if (this.form.invalid) {
      this.toastService.warning(
        "Vui lòng nhập đầy đủ các thông tin bắt buộc",
        "Thông báo"
      );
      return;
    }
    const payload = this.form.getRawValue(); 
    this.create(payload);
    this.closeModal;
  }
  create(user: any) {
    console.log(user);

    this.authService.create(user).subscribe(
      (res) => {
        if (res.errorCode === "200") {
          this.toastService.success(res.errorDesc, "Thông báo");
          this.passEntry.emit();
        } else {
          this.toastService.error(res.errorDesc, "Thông báo");
        }
      },
      (err) => {
        this.toastService.error(err, "Thông báo");
      }
    );
  }


  ngOnInit() {
    this.initForm();
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
