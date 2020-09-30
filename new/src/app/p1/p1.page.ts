import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
  const alert = await this.alertController.create({

    
  message:`
  <ion-icon name="location-outline"></ion-icon> Allow Credit Monk to access this device's location?`,
      
      buttons: [
        {
          text:'DENY',
          role:'cancel',
          cssClass: '<a href="calls"></a>',
          handler:() => {
          console.log('Deny clicked');
          }
        },
        {
          text: 'ALLOW',
          handler:() => {
          console.log('Allow clicked');
         }
        }
      ],
      
    });

    await alert.present();
    const result=await alert.onDidDismiss();
    console.log(result);
  }

  
  ngOnInit() {
  }

}
