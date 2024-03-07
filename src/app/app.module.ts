import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { ServiceComponent } from './main/service/service.component';
import { ProductsComponent } from './main/products/products.component';
import { CartComponent } from './main/cart/cart.component';
import { UserComponent } from './main/user/user.component';
import { LoginComponent } from './main/user/login/login.component';
import { RegisterComponent } from './main/user/register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    ProductsComponent,
    CartComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
