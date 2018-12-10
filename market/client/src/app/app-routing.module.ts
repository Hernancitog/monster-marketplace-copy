import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent} from "./listing/listing.component";
import { DashboardComponent} from "./dashboard/dashboard.component";
import { ListingDetailComponent} from "./listing-detail/listing-detail.component";
import { FrontpageComponent} from "./frontpage/frontpage.component";
import { AboutComponent} from "./about/about.component";
import { ProductDetailComponent} from "./product-detail/product-detail.component";
import { RegisterComponent} from "./register/register.component";
import { SummaryComponent} from "./summary/summary.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {SellComponent} from "./sell/sell.component";

const routes: Routes = [
  { path: 'listings', component: ListingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listing/:id', component: ListingDetailComponent},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

  { path: '', component: FrontpageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'user', component: UserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'sell', component: SellComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
