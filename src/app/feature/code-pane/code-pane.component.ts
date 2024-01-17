import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nc-code-pane',
  templateUrl: './code-pane.component.html',
  styleUrl: './code-pane.component.css'
})
export class CodePaneComponent {

  @Input() code: string = '';

}
