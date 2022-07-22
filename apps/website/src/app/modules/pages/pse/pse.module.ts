import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PseRoutingModule } from './pse-routing.module';
import { PseComponent } from './pse.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    PseComponent
  ],
  imports: [
    PseRoutingModule,
    SharedModule
  ]
})
export class PseModule { }
