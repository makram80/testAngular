import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../Models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //apiUrl = "http://localhost:3000/posts";

  constructor(/*private http: HttpClient */) { }

  addpost(post: any){
    const posts = JSON.parse(localStorage.getItem("posts") || '[]');
    posts.push(post)
    localStorage.setItem('posts',JSON.stringify(posts));
  };
  listpost(){
    const posts = JSON.parse(localStorage.getItem("posts") || '[]');
    return posts;
  };
  deletepost(id: any){
    const posts = JSON.parse(localStorage.getItem("posts") || '[]');
    posts.splice(id,1);
    localStorage.setItem('posts',JSON.stringify(posts));

  }
  getPostbyid(id: string | number){
    const posts = JSON.parse(localStorage.getItem("posts") || '[]');
    return posts[id];
  }
  updatePost(id: any,post: { value: any; }){
    const posts = JSON.parse(localStorage.getItem("posts") || '[]');
    posts.splice(id,1,post.value);
    localStorage.setItem('posts',JSON.stringify(posts));

  }

  /*  code pour http...
  getBlog(){
    return this.http.get<Blog[]>(this.apiUrl);
  }
  delete(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`) 
  }
  add(task: any){
    return this.http.post<Blog[]>(this.apiUrl, task);
  }
  */

}
