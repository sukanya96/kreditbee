import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.page.html',
  styleUrls: ['./wait.page.scss'],
})
export class WaitPage implements OnInit {

 shownGroup=null;
 shownGroup1=null;
 shownGroup2=null;

  constructor() { 
  }
  ngOnInit() {
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

   toggleGroup1(group) {
    if (this.isGroupShown1(group)) {
        this.shownGroup1 = null;
      } else {
        this.shownGroup1 = group;
      }
   };
  
  isGroupShown1(group) {
    return this.shownGroup1 === group;
    };

    toggleGroup2(group) {
      if (this.isGroupShown2(group)) {
          this.shownGroup2 = null;
        } else {
          this.shownGroup2 = group;
        }
     };
    
    isGroupShown2(group) {
      return this.shownGroup2 === group;
      };

  }
  
