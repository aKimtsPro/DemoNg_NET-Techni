import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { ApiConsumeService } from 'src/app/service/api-consume.service';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.scss']
})
export class ApiGetComponent implements OnInit {

  posts?: Post[];

  form= new FormGroup({
    'author': new FormControl(),
    'title': new FormControl()
  })

  constructor(private _apiService: ApiConsumeService) {
    this.loadPosts();
  }

  ngOnInit(): void {
  }

  createPost(){
    this._apiService.createPost( this.form.value ).subscribe({
      next: (next) => this.loadPosts(),
      error: (error) => alert("un problème est survenu"),
      complete: () => alert("Requete terminée sans problème")
    });
  }

  loadPosts(){
    this._apiService.getPosts().subscribe( posts => this.posts = posts );
  }

}
