import {ActionReducerMap} from '@ngrx/store';
import { QuestionsState, QuestionsReducer } from '../questions/store/reducers/questions.reducer';

export interface AppState {
  questionsState: QuestionsState;
}

export const reducers: ActionReducerMap<AppState> = {
  questionsState: QuestionsReducer
};
