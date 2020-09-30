import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})

export class CallsPage implements OnInit {

  constructor( public alertController: AlertController ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message:`
      <i style='font-size:24px' class='far'>&#xf2c1;</i> Allow Credit Monk to access your contacts?.`,
      
      buttons: [
        {
          text:'DENY',
          role:'cancel',
          cssClass:'method-color',
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

   ngOnInit() { }

}
