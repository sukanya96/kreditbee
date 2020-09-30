import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss'],
})
export class Help2Page implements OnInit {

  shownGroup = null;
  shownGroup1=null;
  shownGroup2=null;
  shownGroup3=null;
  shownGroup4=null;
  shownGroup5=null;
  shownGroup6=null;
  shownGroup7=null;
  shownGroup8=null;
  shownGroup9=null;
  shownGroup10=null;
  shownGroup11=null;
  shownGroup12=null;

  constructor() { }

  ngOnInit() { }

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

  toggleGroup3(group) {
    if (this.isGroupShown3(group)) {
        this.shownGroup3 = null;
      } else {
        this.shownGroup3 = group;
      }
   };
   isGroupShown3(group) {
    return this.shownGroup3 === group;
  };
  toggleGroup4(group) {
    if (this.isGroupShown4(group)) {
        this.shownGroup4 = null;
      } else {
        this.shownGroup4 = group;
      }
   };
   isGroupShown4(group) {
    return this.shownGroup4 === group;
  };
  toggleGroup5(group) {
    if (this.isGroupShown5(group)) {
        this.shownGroup5 = null;
      } else {
        this.shownGroup5 = group;
      }
   };
   isGroupShown5(group) {
    return this.shownGroup5 === group;
  };
  toggleGroup6(group) {
    if (this.isGroupShown6(group)) {
        this.shownGroup6 = null;
      } else {
        this.shownGroup6 = group;
      }
   };
   isGroupShown6(group) {
    return this.shownGroup6 === group;
  };
  toggleGroup7(group) {
    if (this.isGroupShown7(group)) {
        this.shownGroup7 = null;
      } else {
        this.shownGroup7 = group;
      }
   };
   isGroupShown7(group) {
    return this.shownGroup7 === group;
  };
  toggleGroup8(group) {
    if (this.isGroupShown8(group)) {
        this.shownGroup8 = null;
      } else {
        this.shownGroup8 = group;
      }
   };
   isGroupShown8(group) {
    return this.shownGroup8 === group;
  };
  toggleGroup9(group) {
    if (this.isGroupShown9(group)) {
        this.shownGroup9 = null;
      } else {
        this.shownGroup9 = group;
      }
   };
   isGroupShown9(group) {
    return this.shownGroup9 === group;
  };
  toggleGroup10(group) {
    if (this.isGroupShown10(group)) {
        this.shownGroup10 = null;
      } else {
        this.shownGroup10 = group;
      }
   };
   isGroupShown10(group) {
    return this.shownGroup10 === group;
  };
  toggleGroup11(group) {
    if (this.isGroupShown11(group)) {
        this.shownGroup11 = null;
      } else {
        this.shownGroup11 = group;
      }
   };
   isGroupShown11(group) {
    return this.shownGroup11 === group;
  };
  toggleGroup12(group) {
    if (this.isGroupShown12(group)) {
        this.shownGroup12 = null;
      } else {
        this.shownGroup12 = group;
      }
   };
   isGroupShown12(group) {
    return this.shownGroup12 === group;
  };
  }
