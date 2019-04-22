import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  classModalMenu = 'hidden'

  constructor() { }

  ngOnInit() {
  }

  menuVisible(status: boolean){
    if(status){
      this.classModalMenu = 'fadeInRight visible'
    }
    else{
      this.classModalMenu = 'fadeOutRight visible'
    }
  }

}
