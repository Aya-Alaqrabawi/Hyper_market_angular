import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  data: any = []
  display_Image: any;
  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService) { }
  getAll() {
    //show spinner
    this.spinner.show();
    //hit api
    this.http.get('https://localhost:44338/api/Admin/GetAllSlider').subscribe((res) => {
      this.data = res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err => {
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }
  createSlider(data: any) {
    this.spinner.show();
    //hit api
    data.image = this.display_Image;
    this.http.post('https://localhost:44338/api/Admin/CreateSlider', data).subscribe((res: any) => {
      this.data = res;
      this.spinner.hide();
      this.toastr.success('Retrived');
    }, err => {
      this.spinner.hide()
      this.toastr.error("Something went wrong")
    })
  }


  updateSlider(body: any) {
    body.image = this.display_Image;
    this.http.put('https://localhost:44338/api/Admin/UpdateSlider', body).subscribe((res: any) => {
      this.toastr.success('Retrived');
    }, err => {
      this.toastr.error("Something went wrong")
    })
  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44338/api/Admin/UploadImageSlider/', file).subscribe((res: any) => {
      if (res)
        console.log(res);
      this.display_Image = res.image;
    }, err => {
      this.toastr.error(err.message)
    })
  }



  delete(id: number) {
    this.http.delete('https://localhost:44338/api/Admin/DeleteSlider/' + id).subscribe((res) => {
      this.toastr.success('Deleted')
    }, err => {
      this.toastr.error('cant delete')
    })
  }
}
