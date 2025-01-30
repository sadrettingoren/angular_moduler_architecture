import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  {
    path: 'systemadministration', component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./systemadministration/systemadministration.module').then(m => m.SystemadministrationModule) }
    ]
  },
  {
    path: 'businesspartner', component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./businesspartner/businesspartner.module').then(m => m.BusinesspartnerModule) }
    ]
  },
  {
    path: 'organization', component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule) }
    ]
  },
  {
    path: 'individual', component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('../app/individualuser/individualuser.module').then(m => m.IndividualuserModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
