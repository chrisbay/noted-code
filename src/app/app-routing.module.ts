import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CodeNoteComponent } from "./feature/code-note/code-note.component";

const routes: Routes = [
  {
    path: '',
    component: CodeNoteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}