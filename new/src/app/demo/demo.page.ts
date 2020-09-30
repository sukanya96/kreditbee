import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  shownGroup = null;
  shownGroup1 = null;

  constructor( ) { }

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

  ngOnInit() {
  }
  /*showhide() 
        {  
            var div = document.getElementById("newpost");  
            if (div.style.display !== "block") {  
                div.style.display = "none";  
            }  
            else {  
                div.style.display = "block";  
            }  }*/
    
  }

        

