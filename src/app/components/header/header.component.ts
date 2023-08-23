import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`, 
  /** if you want to use HTML in line, use p tags here and the HTML here and a styles: []. if you want to use external HTML file, use a templateURL instead of template: to link to the file
  template:` <p>
  yourTextHere
  </p> 
  `,
  styles: [

  ]
  */
})
export class HeaderComponent {

}
