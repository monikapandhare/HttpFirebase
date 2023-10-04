import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { Ipost } from '../../models/postinterface';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  allPost:Array<Ipost> = [];
  constructor(private _postSrevice : PostServiceService) { }

  ngOnInit(): void {
    this._postSrevice.getAllPost()
     .subscribe(res =>{
      console.log(res);
      this.allPost = res
     })
      
  }

}
