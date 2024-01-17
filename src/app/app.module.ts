import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CodePaneComponent } from "./feature/code-pane/code-pane.component";
import { CodeNoteComponent } from "./feature/code-note/code-note.component";
import { NotePaneComponent } from "./feature/note-pane/note-pane.component";
import { HIGHLIGHT_OPTIONS, HighlightModule } from "ngx-highlightjs";
import { provideHttpClient } from "@angular/common/http";
import { Themes } from "./core/constants/themes.enum";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    CodeNoteComponent,
    CodePaneComponent,
    NotePaneComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet, 
    HighlightModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
        },
        themePath: Themes.SOLARIZED_DARK
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}