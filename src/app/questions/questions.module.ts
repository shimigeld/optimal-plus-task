import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './pages/search/search.component';
import { QuestionsListComponent } from './pages/questions-list/questions-list.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { EffectsModule } from '@ngrx/effects';
import { QuestionsEffects } from './store/effects/questions.effect';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    SearchComponent,
    QuestionsListComponent,
    QuestionPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([QuestionsEffects])
  ],
  exports: [
    SearchComponent,
    QuestionsListComponent,
    QuestionPageComponent
  ]
})
export class QuestionsModule { }
