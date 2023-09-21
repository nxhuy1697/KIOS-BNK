import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/assets/models/ticket';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TicketServiceService } from 'src/app/services/modules/ticket-service.service';


@Component({
  selector: 'app-screen-tv-modal',
  templateUrl: './screen-tv-modal.component.html',
  styleUrls: ['./screen-tv-modal.component.scss']
})
export class ScreenTvModalComponent implements OnInit {

  ticket: Array<Ticket> = []
  form: FormGroup;
  isSubmit: boolean = false;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private toastService: ToastrService,
    public activeModal: NgbActiveModal,
    private ticketService: TicketServiceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      phone: [null, [Validators.required]],
      name : [null, [Validators.required]],
      serviceId: [null, [Validators.required]]
    });
  }
  get f() {
    return this.form.controls;
  }
  create(ticket: any) {
    console.log(ticket);

    this.ticketService.create(ticket).subscribe(
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

  submit() {
    this.isSubmit = true;
    if (this.form.status === 'INVALID') {
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

  closeModal() {
    this.activeModal.dismiss();
  }

}
