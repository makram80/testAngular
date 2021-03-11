import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/Models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  fg!: FormGroup;
  submited: boolean = false;

  constructor(private blogService: BlogService, private route: Router) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*') ]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*') ]),
      categorie: new FormControl('', [Validators.required ]),
      datee: new FormControl('')  
    });

  }

  addCommentaire(){
    console.log(this.fg.value);
    this.submited = true;
    this.blogService.addpost(this.fg.value);
    this.route.navigateByUrl("list");
  }

}
