import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'orders/:id', component: OrdersComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OrdersRoutingModule{}