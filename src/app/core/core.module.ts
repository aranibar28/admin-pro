import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
  exports: [CoreComponent],
})
export class CoreModule {}
