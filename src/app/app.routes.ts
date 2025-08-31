import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
export const routes: Routes = [
    {
    path:"",
    redirectTo:'product/details',
    pathMatch:'full'
    },
    {
        path:'home',
        component:HomePageComponent 
    },
    {
        path:'login',
        loadComponent:()=>import('./layouts/login/login.component').then((c)=>c.LoginComponent)
    },
    {
        path:'register',
        loadComponent:()=>import('./layouts/register/register.component').then((c)=>c.RegisterComponent)
    },
    {
        path:'forget',
        loadComponent:()=>import('./layouts/forget/forget.component').then((c)=>c.ForgetComponent)
    },
    {
      path:'products',
      loadComponent:()=>import('./pages/products-page/products-page.component').then((c)=>c.ProductsPageComponent)
    },
    {
     path:'product/details',
     loadComponent:()=>import('./pages/product-details/product-details.component').then((c)=>c.ProductDetailsComponent)
    }
]
