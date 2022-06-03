import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutherizationGuardGuard } from './autherization-guard.guard';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserModule } from './user/user.module';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
}, {
  path:'',
  component:HomeComponent
}, {
path:'contact',
component:ContactComponent
},{
  path:'about',
  component:AboutComponent
  },{
    path:'test',
    component:TestimonialComponent
    },{
      path:'auth',
      loadChildren:()=>AuthModule,
      },{
        path:'admin',
        loadChildren:()=>AdminModule,
        canActivate:[AutherizationGuardGuard]
        }
        ,{
          path:'user',
          loadChildren:()=>UserModule,
          canActivate:[AutherizationGuardGuard]
          } ,{
            path:'product',
            component:ProductComponent,
            
            },{
              path:'cart',
              component:CartComponent,
              
              },
              {
                path:'**',
                component:ErrorComponent
              },
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
