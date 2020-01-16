import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { QuestionItem } from '../../models/question';
import { setQuestionsList, getQuestionsList, questionClick } from '../actions/questions.actions';

export interface QuestionsState extends EntityState<QuestionItem> {
  selectedQuestion: QuestionItem;
  is_loading: boolean;
}

export const adapter: EntityAdapter<QuestionItem> = createEntityAdapter<QuestionItem>({
  selectId: question => question.question_id
});

export const initialState: QuestionsState = adapter.getInitialState({
  selectedQuestion: null,
  is_loading: false
});

const questionsReducer = createReducer(
  initialState,
  on(getQuestionsList, (state) => {
    return adapter.removeAll({...state, selectedQuestion: null, is_loading: true});
  }),
  on(setQuestionsList, (state, { questions }) => {
    return adapter.addAll(questions, {...state, selectedQuestion: null, is_loading: false});
  }),
  on(questionClick, (state, {question}) => {
    return {...state, selectedQuestion: question};
  })
);

export function QuestionsReducer(state, action) {
  return questionsReducer(state, action);
}
