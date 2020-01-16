import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getQuestionsList } from '../../store/actions/questions.actions';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public group: FormGroup;
  constructor(fb: FormBuilder, private store: Store<AppState>, private searchService: SearchService) {
    this.group = fb.group({
     input: ['', Validators.required]
    });
  }

  public onSearchClick(): void {
    this.store.dispatch(getQuestionsList({input: this.group.controls.input.value}));
  }

}
