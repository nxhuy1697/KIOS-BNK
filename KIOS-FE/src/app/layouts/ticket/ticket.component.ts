import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/assets/models/ticket';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import Chart from 'chart.js';
import Swal from 'sweetalert2';
import { AuthService } from "src/app/services/modules/auth.service";
import { TicketServiceService } from 'src/app/services/modules/ticket-service.service';
import { ScreenService } from 'src/app/services/modules/screen.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticket: Array<Ticket> = []
  listScreen : Array<any> = []
  pageNumber = 1;
  pageSize = 10;
  totalSize = 0;
  maxSize = 5;
  searchForm: FormGroup;
  form: FormGroup;
  backgroundImage: any;

  private currentImage = "";
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private ticketService: TicketServiceService,
    private screenService: ScreenService
  ) { }

  initForm() {
    this.form = this.fb.group({
      phone: [null, [Validators.required]],
      name : [null, [Validators.required]],
      serviceId: [null, [Validators.required]],
      id : [null, [Validators.required]]
    });
  }
  get f() {
    return this.form.controls;
  }
  get() {
    const json = {
      page: this.pageNumber,
      limit: this.pageSize,
      ...this.form.value
    }

    console.log();
    
    
    this.ticketService.get(json).subscribe(res => {
      if(res.errorCode=== '200'){
        this.ticket = res.data;
        this.totalSize = res.totalRecord;
      }
    })
  }
  onPageChange(page: number) {
    this.pageNumber = page;
    this.get();
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.pageNumber = 1;
    this.get();
  }

  ngOnInit() {
    this.initForm();
    this.get();
  }
  deleteU(item: Ticket){
    if (item) {
      Swal.fire({
        title: 'Warning!',
        text: 'Data is not restore after deleting',
        icon: 'error',
        confirmButtonText: 'OK',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancel',
      }).then((res) => {
        if (res.value) {

          const json = {
            id: item.id
          }
          console.log(json);
          
          this.ticketService.delete(json).subscribe(res => {
            console.log(res);
            
            if (res.errorCode === '200') {
              this.toastService.success(res.errorDesc, 'Thông báo');
              this.get();
            } else {
              this.toastService.error(res.errorDesc, 'Thông báo');
            }

          }, err => {
            this.toastService.error(err, 'Thông báo');

          });
        }
      })
      return ;
    }
  }
  updateBackgroundImage() {
    
    let timeDifferenceInMillis = 10000;
    const currentTime: any = new Date(this.getDate() + ' ' + this.getTime());
    const currentDate = this.getDate();
    
    for(let item of this.listScreen){
      if(item.startTime === null){
        continue;
      }
      const startTime : any = new Date( this.getDate() + ' '+ item.startTime);
      const endTime : any = new Date(this.getDate() + ' '+ item.endTime);

      if(currentTime >= startTime && currentTime <= endTime){
        this.currentImage = item.image;
        timeDifferenceInMillis = endTime - currentTime;
      }
    }
    
    for(let item of this.listScreen){ 
      if(item.startDate === null){
        continue;
      }
      if(currentDate >= item?.startDate && currentDate <= item?.endDate){
        this.currentImage = item.image;
        const startDate : any = new Date(item?.startDate);
        const endDate : any = new Date(item?.endDate);
        timeDifferenceInMillis = endDate - startDate;
      }
    }

    this.backgroundImage = `url(\'assets/img/${this.currentImage}\')`;
    setTimeout(() => this.getScreen(), timeDifferenceInMillis);
  }
  getDate() {
    const d = new Date();
    return (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate());

  }

  getTime() {
    const d = new Date();
    return (d.getHours() + ':' + (d.getMinutes()) + ':' + d.getSeconds());
  }
  getScreen() {
    this.screenService.get({}).subscribe(res => {
      if(res.errorCode === '0'){
        this.listScreen = res.data;

        this.updateBackgroundImage();
      }
    })
  }

}
