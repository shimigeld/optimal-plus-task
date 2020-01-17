import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) { }

  public searchTag(tag: string): Promise<any> {
      const url = `https://api.stackexchange.com/2.2/tags/${tag}/faq?pagesize=10&site=stackoverflow`;
      return this.httpClient.get<any>(url).pipe(map(res => res.items)).toPromise();
    }
  }
