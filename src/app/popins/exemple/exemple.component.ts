import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss']
})
export class ExempleComponent implements OnInit {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
