import { Component, OnInit } from '@angular/core';
import { global } from '../shared/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  global = global;

  constructor() { }

  ngOnInit() {
  }

}
