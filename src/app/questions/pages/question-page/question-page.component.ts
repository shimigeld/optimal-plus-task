import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getSelectedQuestion } from '../../store/selectors/questions.selector';
import { QuestionItem } from '../../models/question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, OnDestroy {
  public question: QuestionItem;
  private questionInfoSubscription: Subscription;


  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.questionInfoSubscription = this.store.select(getSelectedQuestion).subscribe((res: QuestionItem) => {
      this.question = res;
    });
  }

  public ngOnDestroy(): void {
    this.questionInfoSubscription.unsubscribe();
  }
}
