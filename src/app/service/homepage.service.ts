import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  data: any = []
  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService) { }


  getAll() {
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/GetAllHome').subscribe((res) => {
      this.data = res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err => {
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }
  createHome(data: any) {
    this.spinner.show();
    //hit api
    this.http.post('https://localhost:44338/api/Admin/CreateHome', data).subscribe((res: any) => {
      this.data = res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err => {
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  updateHome(body: any) {
    this.http.put('https://localhost:44338/api/Admin/UpdateHome', body).subscribe((res: any) => {
      this.toastr.success('Retrived');
    }, err => {
      this.toastr.error("Something went wrong")
    })
  }

  delete(id: number) {
    this.http.delete('https://localhost:44338/api/Admin/DeleteHome/' + id).subscribe((res) => {
      this.toastr.success('Deleted')
    }, err => {
      this.toastr.error('cant delete')
    })
  }
}
