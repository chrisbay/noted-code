import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Samples } from '../../core/constants/samples.enum';

@Component({
  selector: 'nc-code-pane',
  templateUrl: './code-pane.component.html',
  styleUrl: './code-pane.component.css'
})
export class CodePaneComponent implements OnInit {

  public code: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadCode();
  }

  private loadCode(): void {
    const options = {
      headers: {
        'Accept': 'text/plain'
      },
      responseType: "text" as "json"
    };

    // TODO - Figure out better way to retrieve plain text
    this.httpClient.get(Samples.HELLO, options).subscribe({
      next: code => this.code = code as string,
      error: error => this.code = `Error loading file: ${error.message}`
    });
  }

}
