import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  customerObj=JSON.parse(localStorage.getItem('user')||'[]');
  customer_Id=parseInt(this.customerObj.nameid);
  selectedProduct:any={};
  data:any=[]
  display_Image:any;
  amount:any=[];
  invoice:any=[{}];
  order:any=[{}];
  order2:any=[{}];
  ordids:any;
  ordid:any;
  createCredit:any=[]
  creditid:any;
  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  deleteCusCart(id:number){
    this.http.delete('https://localhost:44338/api/user/deletecustomercarts/'+id).subscribe((res)=>
    {
      this.product=[]
      this.total=[];
      this.toastr.success('Thank You')
    },err=>{
      this.toastr.error('can not delete')
    })
    window.location.reload();
  }


  getOrderId(id:any)
  {
   
//show spinner
this.spinner.show();
//hits api
this.http.get('https://localhost:44338/api/User/getOrderId/'+id).subscribe((res)=>{
this.order2=res;
this.ordids=this.order2.length-1
console.log("ordersss///// "+JSON.stringify(res));

console.log("////order2id//////"+this.ordids);
console.log("////order2//////"+JSON.stringify(this.order2.length-1));
console.log("//////////"+JSON.stringify(res).indexOf("orD_ID",-1));
for (let index = 0; index < this.product.length; index++)
{
 const orderPro={
   orderID:this.order2[this.order2.length-1].orD_ID  ,
   productID:this.product[index].proId

}
this.addOrderProducts(orderPro);
this.deleteCusCart(this.customer_Id)
this.deleteCusCart(this.customer_Id)
//hide spinner
this.spinner.hide();
//toaster
// this.toastr.success('Data Retrieved from ord id !!')
}}, err=>{ // في حال كان في error
  this.spinner.hide();
  this.toastr.error('Error in getorderId');
})

  }
  addOrderProducts(order:any){
    this.spinner.show();
    
    this.http.post('https://localhost:44338/api/user/orderProduct',order).subscribe((res:any)=>{
      console.log(res);
      this.spinner.hide();
      // this.toastr.success('data Retrived from add order fun');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Error in addOrderProducts fun")
    })
  }

  DisplayInvoice(id:number){
    //show spinner
    this.spinner.show();
    //hit api
    
    this.http.get('https://localhost:44338/api/user/invoice/'+id).subscribe((res)=>{
    this.invoice=res ;
      console.log("invoice : "+this.invoice);
      
      this.spinner.hide();  
      // this.toastr.success('invoice retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something  wrong")
    })
  }

  addOrders(order:any){
    this.spinner.show();
    console.log("id"+JSON.stringify(order));
    
    console.log("orde///: "+JSON.stringify(order));

    this.http.post('https://localhost:44338/api/user/addOrder',order).subscribe((res:any)=>{
      console.log(res);
      // this.order=res;
      
    this.getOrderId(this.customer_Id)
      console.log("order " +JSON.stringify(order) );
      console.log("products " +JSON.stringify(this.product) );
      
      this.spinner.hide();
      this.toastr.success('Order Done');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong in add order fun")
    })
  }

  updateAmount(body:any)
  {
    this.http.put('https://localhost:44338/api/user/UpdateAmount',body).subscribe((res:any)=>{
      // this.toastr.success('Updated');
    }, err=>{
      this.toastr.error("Something went wrong in update amount")
    })
  }
  createCredits(data:any){
    this.spinner.show();

    console.log("credit "+JSON.stringify(data) );

    this.http.post('https://localhost:44338/api/user/newCredite',data).subscribe((res:any)=>{
      this.createCredit=res;
      // this.creditid=res
      console.log("credit "+JSON.stringify(res) );
      
      this.spinner.hide();
      // this.toastr.success('Credit Created');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something went wrong in create creadits")
      this.toastr.error(err.message , err.status)
    })
    window.location.reload();
  }

  GetAmount(id:number){
    this.spinner.show();

    this.http.get('https://localhost:44338/api/user/CreditAmount/'+id).subscribe((res)=>{
      console.log('inside get amount '+JSON.stringify(res));
      
    this.amount=res ;
    // console.log( "amount len inside get "+JSON.stringify(this.amount[this.amount.length-1].cardID));      
      
      // this.spinner.hide();  
      // this.toastr.success('Amount retrived');
    }, err=>{
      this.spinner.hide()
      this.toastr.error("Something  wrong in get amount")
    })
    // window.location.reload()

  }

  getAll(){
    
    this.spinner.show();
    
    this.http.get('https://localhost:44338/api/Admin').subscribe((res)=>{
    
    this.data=res;
    
    this.spinner.hide();  
    
    this.toastr.success('Retrived');
    
  }, err=>{
  
    this.spinner.hide()
  
    this.toastr.error("Something went wrong")
    })
  }


  createCategory(data:any){
    this.spinner.show();
    
    data.imageName=this.display_Image;
    
    this.http.post('https://localhost:44338/api/Admin',data).subscribe((res:any)=>{
    
    this.data=res;
    
    this.spinner.hide();
    
    this.toastr.success('Retrived');
    
  }, err=>{
  
    this.spinner.hide()
  
    this.toastr.error("Something went wrong")
    })
  }


  uploadAttachment(file:FormData){
    this.http.post('https://localhost:44338/api/Admin/UploadImg/',file).subscribe((res:any)=>{
      if(res)
      console.log(res);
      this.display_Image=res.imageName;
    }, err=>{
      this.toastr.error(err.message)
    })
  }

  updateCategory(body:any)
  {
    body.imageName=this.display_Image;
    this.http.put('https://localhost:44338/api/Admin',body).subscribe((res:any)=>{
      this.toastr.success('Updated');
    }, err=>{
      this.toastr.error("Something went wrong")
    })
  }
  delete(id:number){
    this.http.delete('https://localhost:44338/api/Admin/DeleteCategory/'+id).subscribe((res)=>
    {
      this.toastr.success('Deleted')
    },err=>{
      this.toastr.error('cant delete')
    })
  }
  product:any=[];
  getCategoryAndProduct()
  {
this.spinner.show();

this.http.get('https://localhost:44338/api/User/GetAll').subscribe((res)=>{

this.product=res;

this.spinner.hide();

this.toastr.success('Data Retrieved !!')
}, err=>{ 
  this.spinner.hide();
  this.toastr.error('Something want worning !!');
})

  }
 
  searchProductName(product:any){
    this.http.post('https://localhost:44338/api/User/SearchOfProduct',product).subscribe((res=>{
    this.product=res;
    this.toastr.success(' searchProductName Successfuly !!')
    }),err=>{
      this.toastr.error("Something want worning !!");
    
    });
    
    }
    searchComment(comment:any){
      this.http.post('https://localhost:44338/api/Admin/searchOfComment',comment).subscribe((res=>{
      comment=res;
      this.toastr.success(' searchComment Successfuly !!')
      }),err=>{
        this.toastr.error("Something want worning !!");
      
      });
      
      }

    getAllProduct()
    {
  this.spinner.show();

  this.http.get('https://localhost:44338/api/User/getAllProduct').subscribe((res)=>{

  this.product=res;

  this.spinner.hide();

  this.toastr.success('Data Retrieved !!')
  }, err=>{ 
    this.spinner.hide();
    this.toastr.error('Something want worning !!');
  })
  
    }
    getCart(id:number)
    {
  this.spinner.show();
 
  this.http.get('https://localhost:44338/api/User/getcart/'+id).subscribe((res)=>{
  this.product=res;
 
  this.spinner.hide();
 
  this.toastr.success('Data Retrieved !!')
  }, err=>{ 
    this.spinner.hide();
    this.toastr.error('Something want worning !!');
  })
  
    }
    DeleteProductCart(data :any){
   
      
      this.http.post('https://localhost:44338/api/User/deletecart',data).subscribe((res:any)=>{


      this.toastr.success(' Delete Successfuly !!')

       }, err=>{ 

      // this.toastr.error('Something want worning !!');
      })
  
}
AddProductCart(data :any){
   
      
  this.http.post('https://localhost:44338/api/User/addtocart',data).subscribe((res:any)=>{

    this.toastr.success(' Add Product Successfuly !!')
   }, err=>{ 
   this.toastr.error('Something want worning !!');
  })

}
total:any=[];
getTotalCart(id:number)
{
this.spinner.show();
this.http.get('https://localhost:44338/api/User/GetTotalCustomer/'+id).subscribe((res)=>{
this.total=[res];

this.spinner.hide();

this.toastr.success('Data Retrieved !!')
}, err=>{ 
this.spinner.hide();
this.toastr.error('Something want worning !!');
})

}
updateCart(body:any){
  debugger
  this.http.put('https://localhost:44338/api/User/UpdateQuantity',body).subscribe((res)=>{
    this.toastr.success('Updated Successfully :) ')
  },err=>{
    this.toastr.error('something error ');
  })
}
}
