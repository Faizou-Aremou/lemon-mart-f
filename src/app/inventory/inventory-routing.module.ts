import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { InventoryComponent } from './inventory.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { MonthlyInventoryComponent } from './monthly-inventory/monthly-inventory.component'
import { InventoryStatusComponent } from './inventory-status/inventory-status.component'
import { ProductMixComponent } from './product-mix/product-mix.component'

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: 'stock-entry', pathMatch: 'full' },
      { path: 'stock-entry', component: StockEntryComponent },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'monthly-inventory',
        component: MonthlyInventoryComponent,
      },
      {
        path: 'inventory-status',
        component: InventoryStatusComponent,
      },
      {
        path: 'product-mix',
        component: ProductMixComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
