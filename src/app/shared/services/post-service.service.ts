import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/postinterface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  postBaseUrl : string=`${environment.baseUrl}/posts.json`
  constructor(private _http : HttpClient) { }


  createNewPost(post : Ipost) : Observable<Ipost>{
    return this._http.post<any>(this.postBaseUrl, post)
    
        
      
  }

  getAllPost():Observable<Array<Ipost>>{
   return this._http.get<any>(this.postBaseUrl)
   .pipe(
    map((res) =>{
      console.log(res);
      let postArray : Array<Ipost>=[];
      for(const key in res) {
        let post : Ipost = {
          title : res[key].title,
          content : res[key].title,
          userId : res[key].userId,
          id:key
        }
        postArray.unshift(post)
        
      }
      return postArray
      
    })
   )
  }
}
