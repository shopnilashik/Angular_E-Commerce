import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    
    path: "admin", loadChildren: () => import('./admin/admin.module').then(mod=>mod.AdminModule)
  },

  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: RegisterComponent,
    path: 'register',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: ProductsComponent,
    path: 'products',
  },

  {
    component: PageNotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
