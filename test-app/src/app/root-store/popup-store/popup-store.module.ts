import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PopUpStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popup', featureReducer),
    EffectsModule.forFeature([PopUpStoreEffects])
  ],
  providers: [PopUpStoreEffects]
})
export class PopUpStoreModule {}