import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Samples } from '../../core/constants/samples.enum';
import { CodeNote } from '../../core/models/code-note';
import { FormattingService } from '../../core/providers/formatting.service';

@Component({
  selector: 'nc-code-note',
  templateUrl: './code-note.component.html',
  styleUrl: './code-note.component.css'
})
export class CodeNoteComponent {

  public codeNote: CodeNote = {
    code: '',
    note: ''
  };

  constructor(
    private httpClient: HttpClient,
    private formattingService: FormattingService
  ) {}

  ngOnInit(): void {
    this.loadCode();
    this.loadNote();
  }

  private loadCode(): void {
    const options = {
      headers: {
        'Accept': 'text/plain'
      },
      responseType: "text" as "json"
    };

    // TODO - Figure out better way to retrieve plain text
    this.httpClient.get(Samples.HELLO+'.ts', options).subscribe({
      // next: code => this.codeNote.code = code as string,
      next: code => {
        // TODO - CodePane should be responsible for formatting
        this.formattingService.formatCode(code as string).subscribe(
          res => this.codeNote.code = res
        )
      },
      error: error => this.codeNote.code = `Error loading file: ${error.message}`
    });
  }

  private loadNote(): void {
    const options = {
      headers: {
        'Accept': 'text/plain'
      },
      responseType: "text" as "json"
    };

    // TODO - Figure out better way to retrieve plain text
    this.httpClient.get(Samples.HELLO+'.md', options).subscribe({
      // next: note => this.codeNote.note = note as string,
      next: note => {
        // TODO - NotePane should be responsible for formatting
        this.formattingService.formatNote(note as string).subscribe(
          res => this.codeNote.note = res
        )
      },
      error: error => this.codeNote.note = `Error loading file: ${error.message}`
    });
  }

}
