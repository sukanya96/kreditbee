import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router) { 

  this.formcontrol = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    lname: ['', [Validators.required, Validators.minLength(2),Validators.pattern(/^[a-zA-Z\s]*$/)]],
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
       
            this.myRoute.navigate(['/dob']);
          }
    }
    
    }