import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArchitectComponent} from "./architect/architect/architect.component";


const routes: Routes = [
  {path: "architect", component: ArchitectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
