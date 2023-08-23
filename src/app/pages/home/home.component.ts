import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // not sure why './home.component.html' does not work but 'home.component.html' works
  styles: [
  ] 
})
export class HomeComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {

  }
}
