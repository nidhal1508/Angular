import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-majus',
  templateUrl: './majus.component.html',
  styleUrls: ['./majus.component.css']
})
export class MajusComponent implements OnInit {
  mytext: string;
  
  constructor() { }

  ngOnInit() {
  }

}

function upcase() {
var text:string;
text=this.mytext;
  this.mytext.value=text.toUpperCase( );

}

