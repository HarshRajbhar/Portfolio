import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
  },
];

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [WorkComponent],
})
export class WorkModule {}