import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScanPage } from './scan.page';

// IMPORTER UNE CLASS DE CORDOVA
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: ScanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScanPage],
  providers: [BarcodeScanner]
})
export class ScanPageModule {}