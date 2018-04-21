import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(function() {
      jQuery('#spin-text').fadeOut(500, function() {
          var $this = jQuery(this);
          $this.text($this.text() == 'Front-End Development' ? 'Back-End Development' : 'Front-End Development');
          // $this.toggleClass('first second');        
          $this.fadeIn(1000);
      });
  }, 5000);
  }

}
