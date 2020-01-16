import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, QuestionsState } from '../reducers/questions.reducer';
import { AppState } from 'src/app/reducers';

const {
  selectAll,
} = adapter.getSelectors();


export const selectQuestionsState = createFeatureSelector<QuestionsState>('questionsState');

export const QuestionsSelectAll = selectAll;

export const selectAllQuestions = createSelector(selectQuestionsState, QuestionsSelectAll);

export const getSelectedQuestion = createSelector(selectQuestionsState, state => state.selectedQuestion);

export const showLoader = createSelector(selectQuestionsState, state => state.is_loading);

