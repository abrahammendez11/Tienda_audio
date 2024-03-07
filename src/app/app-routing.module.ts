import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServiceComponent } from './main/service/service.component';
import { ProductsComponent } from './main/products/products.component';
import { CartComponent } from './main/cart/cart.component';
import { LoginComponent } from './main/user/login/login.component';
import { UserComponent } from './main/user/user.component';
import { RegisterComponent } from './main/user/register/register.component';





const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'service', component:ServiceComponent},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'user', component:UserComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
