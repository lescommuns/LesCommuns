import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosyComponent } from './components/cosy/cosy.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { IncludedServicesComponent } from './components/included-services/included-services.component';
import { PricesComponent } from './components/prices/prices.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"place", component: CosyComponent},
  {path:"prices", component: PricesComponent},
  {path:"services", component: IncludedServicesComponent},
  {path:"events", component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
