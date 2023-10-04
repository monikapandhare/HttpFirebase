import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from './shared/models/postinterface';
import { PostServiceService } from './shared/services/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HttpFirebase';
 

  ngOnInit(): void {
   
  }

  
}
