import { Component, OnInit, OnDestroy } from '@angular/core';

import { QuestionItem } from '../../models/question';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { questionClick } from '../../store/actions/questions.actions';
import { selectAllQuestions, showLoader } from '../../store/selectors/questions.selector';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit, OnDestroy {
  public showLoader = false;
  public questions: Array<QuestionItem>;

  private loaderSubscription: Subscription;
  private questionsSubscription: Subscription;

  constructor(private store: Store<AppState>) { }


  public ngOnInit(): void {
    this.questionsSubscription = this.store.select(selectAllQuestions)
    .pipe(filter(res => res !== null && res !== undefined)).subscribe((res: Array<QuestionItem>) => {
      this.questions = res;
    });

    this.loaderSubscription = this.store.select(showLoader).subscribe((isLoading: boolean) => {
      this.showLoader = isLoading;
    });
  }


  public onQuestionClick(question: QuestionItem): void {
    this.store.dispatch(questionClick({question}));
  }

  public ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
    this.questionsSubscription.unsubscribe();
  }
}
