import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//
import { Observable } from 'rxjs';//
import { PostModels } from '../models/post-models';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http: HttpClient) { }
  url: string = " https://www.reddit.com/r/";
  //api call method
  getPost(sub: string): Observable<PostModels> {
    return this.http.get<PostModels>(`${this.url}${sub}/.json`);
  }
}
