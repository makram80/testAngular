import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  //publications: Blog[] = [];
  posts:Array<any> | undefined;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts=this.blogService.listpost();
    console.log(this.posts);

    //this.getTasks()
    //console.log( "results : ",this.publications);
  }

  deletPost(i: any){
    this.blogService.deletepost(i);
    window.location.reload(); 
    }



  /*
  getTasks(){
    this.blogService.getBlog().subscribe( data=>{
      console.log(data);
      this.publications = data
    })
  }

  del(id:any){
    this.blogService.delete(id)
    .subscribe(()=> {
      this.publications.filter(task => task.id != id)
      this.getTasks()
    })
  }
  */
}
