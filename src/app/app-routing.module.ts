import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {MatrialFormComponent} from './matrial-form/matrial-form.component'
import {RectiveFormComponent} from './rective-form/rective-form.component'
import {MatrialModalComponent} from './matrial-modal/matrial-modal.component'

const routes: Routes = [
  
  {
    path:'',component:MatrialFormComponent
  },
  {
    path:'rective-form',component:RectiveFormComponent
  },
  {
    path:'modal',component:MatrialModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
