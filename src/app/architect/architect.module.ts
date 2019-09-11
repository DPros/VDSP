import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchitectComponent} from './architect/architect.component';
import {StoreModule} from "ngrx/@ngrx/store";


@NgModule({
  declarations: [ArchitectComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot()
  ],
  exports: [
    ArchitectComponent
  ]
})
export class ArchitectModule {
}
