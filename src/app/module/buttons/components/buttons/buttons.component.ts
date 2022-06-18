import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  selected(event:Event) {
    this.active = !this.active;
  }

}
