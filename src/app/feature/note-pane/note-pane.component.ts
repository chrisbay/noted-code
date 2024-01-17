import { Component, Input } from '@angular/core';

@Component({
  selector: 'nc-note-pane',
  templateUrl: './note-pane.component.html',
  styleUrl: './note-pane.component.css'
})
export class NotePaneComponent {

  @Input() note: string = '';

}
