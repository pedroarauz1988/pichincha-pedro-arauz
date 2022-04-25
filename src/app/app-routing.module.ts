import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';


@NgModule({
  imports: [RouterModule.forRoot([

    {
      path: '',
      component: SidebarComponent,
      children: [
        { path: 'client', component: ClientsComponent, pathMatch: 'full' }
      ],
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


