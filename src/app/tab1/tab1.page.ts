import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScanPage } from '../scan/scan.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private  modalCtrl:ModalController) {}

  ngOnInit(){}

  async openScanPage(){
    const modal = await this.modalCtrl.create({
      component: ScanPage
    });

    // ouvrir la modal
    return modal.present();
  }
}
