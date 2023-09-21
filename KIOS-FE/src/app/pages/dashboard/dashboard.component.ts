import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { User } from "src/assets/models/users";
import Swal from 'sweetalert2';
import { AuthService } from "src/app/services/modules/auth.service";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DashModalComponent } from './dash-modal/dash-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user1: Array<User> = []
  pageNumber = 1;
  pageSize = 10;
  totalSize = 0;
  maxSize = 5;
  searchForm: FormGroup;
  form: FormGroup;


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {
    this.initForm();
    this.get();
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});

  }
  constructor (
    private fb: FormBuilder,
    private modalService: NgbModal,
    private authService: AuthService,
    private toastService: ToastrService
   
  ) {}


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      name : [null, [Validators.required]]
    });
  }
  get f() {
    return this.form.controls;
  }
  
  openModal(item?: any, type?: string) {
    const modalRef = this.modalService.open(DashModalComponent,
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


  update(user: any) {
    console.log(user);
    this.authService.update(user).subscribe(res => {
      if (res.errorCode === '200') {
        this.toastService.success(res.errorDesc, 'Thông báo');
      } else {
        this.toastService.error(res.errorDesc, 'Thông báo');
      }
    }, err => {
      this.toastService.error(err, 'Thông báo');
    });
  }

  deleteU(item: User){
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
          
          this.authService.delete(json).subscribe(res => {
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

  get() {
    const json = {
      page: this.pageNumber,
      limit: this.pageSize,
      ...this.form.value
    }

    console.log();
    
    
    this.authService.get(json).subscribe(res => {
      if(res.errorCode=== '200'){
        this.user1 = res.data;
        this.totalSize = res.totalRecord;
      }
    })
  }
  search() {
    this.pageNumber = 1;
    this.pageSize = 10;
    this.get();
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

  refresh() {
    this.searchForm.reset();
    this.search();
  }

 

}
