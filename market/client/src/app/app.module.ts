import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import {HttpClientModule} from "@angular/common/http";
import { ConfigComponent } from './config/config.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent} from "./frontpage/frontpage.component";
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ConfigComponent,
    ListingDetailComponent,
    DashboardComponent,
    FrontpageComponent,
    ProductComponent,
    AboutComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    SummaryComponent,
    NavbarComponent,
    UserComponent,
    HomepageComponent,
    SellComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
