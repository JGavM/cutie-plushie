import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { MatTableExporterModule } from 'mat-table-exporter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { ManagementHomeComponent } from './management/management-home/management-home.component';
import { ManagementRegisterComponent } from './management/management-register/management-register.component';
import { ManagementSuppliersComponent } from './management/management-suppliers/management-suppliers.component';
import { ManagementDistributorsComponent } from './management/management-distributors/management-distributors.component';
import { ManagementSalesComponent } from './management/management-sales/management-sales.component';
import { ManagementProductsComponent } from './management/management-products/management-products.component';
import { ManagementLoginComponent } from './management/management-login/management-login.component';
import { ManagementPasswordchangeComponent } from './management/management-passwordchange/management-passwordchange.component';

import { MatPaginatorIntlEsp } from './management/customPaginatorLabels';
import { ProductDialogFormComponent } from './management/management-products/product-dialog-form/product-dialog-form.component';
import { SupplierDialogFormComponent } from './management/management-suppliers/supplier-dialog-form/supplier-dialog-form.component';
import { DistributorDialogFormComponent } from './management/management-distributors/distributor-dialog-form/distributor-dialog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    ManagementLoginComponent,
    ManagementHomeComponent,
    ManagementRegisterComponent,
    ManagementSuppliersComponent,
    ManagementDistributorsComponent,
    ManagementSalesComponent,
    ManagementProductsComponent,
    ManagementPasswordchangeComponent,
    ProductDialogFormComponent,
    SupplierDialogFormComponent,
    DistributorDialogFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatTableExporterModule
  ],
  providers: [
    HttpClientModule,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlEsp}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ProductDialogFormComponent,
    SupplierDialogFormComponent,
    DistributorDialogFormComponent
  ],
})
export class AppModule { }
