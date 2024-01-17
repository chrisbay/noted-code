import { Injectable } from "@angular/core";
import { marked } from "marked";
import { HighlightJS } from "ngx-highlightjs";
import { Observable, from, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormattingService {

  constructor(private hljs: HighlightJS) {
    marked.use({
      async: true
    });
  }

  public formatCode(code: string): Observable<string> {
    return this.hljs.highlightAuto(code, ['typescript'])
      .pipe(
        map(res => {
          console.log(res);
          return res.value === undefined ? '' : res.value;
        })
      );
  }

  public formatNote(note: string): Observable<string> {
    const retVal =  marked.parse(note);
    if (typeof retVal === 'string') return of(retVal);

    return from(retVal);
  }

}