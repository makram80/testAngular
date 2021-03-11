import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  fg!: FormGroup;
  submited: boolean = false;
  id:any;

  constructor(private blogService: BlogService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('index');
    this.fg = new FormGroup({
                              titre: new FormControl('', [Validators.required]),
                              description: new FormControl('', [Validators.required, Validators.minLength(5)]),
                              categorie: new FormControl('', [Validators.required]),
                              datee: new FormControl('')
                            });
  const post = this.blogService.getPostbyid(this.id);
  this.fg.patchValue(post);
  }


  submitpost() {
    this.id = this.router.snapshot.paramMap.get('index');
    this.submited = true;
      this.blogService.updatePost(this.id,this.fg)
      this.route.navigateByUrl("list");   
  }

}
