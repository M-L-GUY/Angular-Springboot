import { Component, OnInit } from '@angular/core';
import { AppMenuService } from '../service/app-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public appMenuService:AppMenuService) {
    
   }

  ngOnInit(): void {
  }

}
