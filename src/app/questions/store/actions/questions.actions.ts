import { createAction, props } from '@ngrx/store';
import { QuestionItem } from '../../models/question';

export const getQuestionsList = createAction('[SearchComponent] Get Questions List', props<{input: string}>());
export const setQuestionsList = createAction('[QuestionsEffects] Set Questions List', props<{questions: Array<any>}>());

export const questionClick = createAction('[QuestionsListComponent] Question Click', props<{question: QuestionItem}>());
