import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/assets/models/ticket';
import { ScreenTvModalComponent } from './screen-tv-modal/screen-tv-modal.component';

@Component({
  selector: 'app-screen-tv',
  templateUrl: './screen-tv.component.html',
  styleUrls: ['./screen-tv.component.scss']
})
export class ScreenTvComponent implements OnInit {
  ticket: Array<Ticket> = []
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
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
  openModal(item?: any, type?: string) {
    const modalRef = this.modalService.open(ScreenTvModalComponent,
      {
        centered: true,
        size: 'xl',
        backdrop: 'static'
      });
      modalRef.componentInstance.item = item;
      modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      
        this.modalService.dismissAll();
      })
      modalRef.componentInstance.type = type;
  }

}
