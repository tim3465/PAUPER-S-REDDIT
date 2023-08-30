import { Component } from '@angular/core';
import { PostModels } from 'src/app/models/post-models';//
import { ReadService } from 'src/app/services/read.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent {

  //prop
  PostResponse: PostModels = {} as PostModels;
  subreddit: string = "aww";
  status:string ="";
  //const
  constructor(private _readService: ReadService) { }

  ngOnInit() {
    this.CallApi();
  }
  //my page was disappearing so
  //goto app.module and put in HttpClientModule// in imports:


  CallApi(): void {
    this.status="loading";
    this._readService.getPost(this.subreddit).subscribe((response: PostModels) => {
      this.PostResponse = response;
      this.PostResponse.data.children.splice(10)
      console.log(this.PostResponse)
      this.status="";
    },(err)=>{
      console.log("Can't find subreddit")
      this.status="Could not find subreddit";
    });
  }



}
