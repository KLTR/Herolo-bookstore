import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   goToByScroll(id) {
     console.log(id);
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    jQuery('html,body').animate({
            scrollTop: jQuery("#" + id).offset().top
        },
        'slow');
}
}
