import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
import { WeatherPageComponent } from './home/weather-page/weather-page.component';

const routes: Routes = [
  {    path: '',    component: LoginComponent,    pathMatch: 'full',  },
  {    path: 'login',    component: LoginComponent,    pathMatch: 'full',  },
  {    path: 'homePage',    component: HomePageComponent,    pathMatch: 'full',  },
  {    path: 'detaillsPage/:item',    component: HomePageComponent,    pathMatch: 'full',  },
  {    path: 'weatherPage',    component: WeatherPageComponent,    pathMatch: 'full',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
