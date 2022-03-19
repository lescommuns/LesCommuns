import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosyComponent } from './components/cosy/cosy.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cosy", component: CosyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
