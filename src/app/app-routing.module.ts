import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailisComponent } from './components/product-detailis/product-detailis.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailisComponent },
  { path: 'basket', component: BasketComponent },

  { path: "**", redirectTo: "", component: BaseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
