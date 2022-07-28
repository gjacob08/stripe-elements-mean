import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductListsComponent } from './component/product-lists/product-lists.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path: '', redirectTo:'product-lists', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-lists', component: ProductListsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
