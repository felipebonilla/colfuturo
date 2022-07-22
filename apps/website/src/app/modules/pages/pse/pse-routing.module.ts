import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PseComponent } from './pse.component';

const routes: Routes = [{ path: '', component: PseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PseRoutingModule { }
