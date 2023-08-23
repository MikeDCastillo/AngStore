import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Be sure to add the HomeComponent here so we can access that route.

const routes: Routes = [{
  path: 'home',
  component: HomeComponent // on app load, homeComponent will load when 'http://localhost:4200/home' is called. Update in the app.component.ts file as well in the <router-module>
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
