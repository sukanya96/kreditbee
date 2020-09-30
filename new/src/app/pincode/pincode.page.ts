import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.page.html',
  styleUrls: ['./pincode.page.scss'],
})
export class PincodePage implements OnInit {

  shownGroup = null;
  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router) { 

    this.formcontrol = this.fb.group({
    pincode: ['', [Validators.required,(Validators.minLength(6)),
      (Validators.maxLength(6)),]],
    roles: this.fb.array(['USER']),
   });
  }
 
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
      }
   };
  
  isGroupShown(group) {
    return this.shownGroup === group;
  };

 
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
  }
  get errorControl() {
    return this.formcontrol.controls;
  }

  getreg() {
      this.isSubmitted = true;
      if (!this.formcontrol.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        console.log(this.formcontrol.value)
      }
      {
        this.formcontrol.reset();
       
            this.myRoute.navigate(['/appln']);
          }
    }

}
