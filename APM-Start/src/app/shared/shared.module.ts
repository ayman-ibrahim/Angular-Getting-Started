import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.componenet';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StarComponent],
  imports: [
    CommonModule
  ],
  exports: [StarComponent, FormsModule, CommonModule]
})
export class SharedModule { }
