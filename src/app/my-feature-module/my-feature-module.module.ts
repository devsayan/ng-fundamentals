import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureComponentComponent } from './feature-component/feature-component.component';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [FeatureComponentComponent],
  exports : [
    FeatureComponentComponent
  ]
})
export class MyFeatureModuleModule { }
