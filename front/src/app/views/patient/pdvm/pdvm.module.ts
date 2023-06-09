import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { PdvmRoutingModule } from './pdvm-routing.module';
import { PdvmComponent } from './pdvm.component';




@NgModule({
  declarations: [
    PdvmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    PdvmRoutingModule,
    


  ],
})
export class PdvmModule { }
