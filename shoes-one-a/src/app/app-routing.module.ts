import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Catalog1Component } from './components/catalog/catalog1/catalog1.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppinCardComponent } from './components/shoppin-card/shoppin-card.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'catalog1', component: Catalog1Component},
  {path: 'shoppinCard', component: ShoppinCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
