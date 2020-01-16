import { Injectable } from '@angular/core';
import { exhaustMap, tap } from 'rxjs/operators';

import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SearchService } from '../../services/search.service';
import { getQuestionsList, setQuestionsList } from '../actions/questions.actions';
import { QuestionItem } from '../../models/question';
import { AppState } from 'src/app/reducers';


@Injectable()
export class QuestionsEffects {
  constructor(private actions$: Actions, private searchService: SearchService, private store: Store<AppState>) {}

  getQuestionsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuestionsList),
      exhaustMap(async (action) => {
        return await this.searchService.searchTag(action.input);
      }),
      tap((questions: Array<any>) => {
        this.store.dispatch(setQuestionsList({questions}));
      })
    ), {dispatch: false});
}
