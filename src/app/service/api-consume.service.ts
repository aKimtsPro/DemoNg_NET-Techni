import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  constructor(private _client: HttpClient) { 
  }

  getPosts(): Observable<Post[]>{
    return this._client.get<Post[]>("http://localhost:3000/posts").pipe(
      tap((data) => console.log(data))
    )
  }

  createPost(post: Post): Observable<Post> {
    return this._client.post<Post>("http://localhost:3000/posts", post)
  }



}
