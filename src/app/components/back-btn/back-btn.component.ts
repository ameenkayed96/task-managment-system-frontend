import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent {

  constructor(private _location: Location) 
  {}

  back(){
    this._location.back();
  }

}
