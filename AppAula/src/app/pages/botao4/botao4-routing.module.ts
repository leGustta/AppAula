import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Botao4Page } from './botao4.page';

const routes: Routes = [
  {
    path: '',
    component: Botao4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Botao4PageRoutingModule {}
