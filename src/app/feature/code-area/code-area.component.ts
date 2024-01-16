import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { Samples } from '../../core/constants/samples.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'code-area',
  standalone: true,
  imports: [HighlightModule],
  templateUrl: './code-area.component.html',
  styleUrl: './code-area.component.css'
})
export class CodeAreaComponent implements OnInit {

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
