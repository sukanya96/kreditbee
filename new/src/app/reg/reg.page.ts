import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Reg } from '../model/classmodel';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  public data: Reg = new Reg();

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router) { 

    this.formcontrol = this.fb.group({
    //phone: ['', [Validators.required, (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],  
    name: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    phone: ['', [Validators.required,Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
    roles: this.fb.array(['USER']),
   });
  }
 
  
  
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
