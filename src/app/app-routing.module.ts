import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PreferitiComponent } from './Pages/preferiti/preferiti.component';
import { DettaglioComponent } from './Pages/dettaglio/dettaglio.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path:'preferiti',
    component: PreferitiComponent
  },
  {
    path:'dettaglio/:id',
    component: DettaglioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
