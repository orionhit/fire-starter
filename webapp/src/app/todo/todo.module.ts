import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UiModule } from '../ui/ui.module'

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoComponent } from './todo.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  declarations: [
    ListComponent,
    FormComponent,
    ListItemComponent,
    TodoComponent,
  ],
  exports: [
    TodoComponent,
  ],
})
export class TodoModule { }