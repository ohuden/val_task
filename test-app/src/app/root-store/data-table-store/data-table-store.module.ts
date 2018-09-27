import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DataTableStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('data', featureReducer),
    EffectsModule.forFeature([DataTableStoreEffects])
  ],
  providers: [DataTableStoreEffects]
})
export class DataTableStoreModule {}