import { Component, OnInit } from '@angular/core';
import { modalController } from '@ionic/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { ProductService } from '../product.service';



@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  barcode;
  productData;

  constructor(private barcodeScanner:BarcodeScanner, private productService:ProductService) { }

  ngOnInit() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data :  ', barcodeData);
      this.barcode = barcodeData;
      this.productService.getProduct(this.barcode.text).subscribe((data) => {
        this.productData = data[product];
        console.log(this.productData);
      });

      
      
    }).catch(err => {
      console.log('Error : ', err);
    });
  }
 
  closeModal(){
    modalController.dismiss();
  }


}
