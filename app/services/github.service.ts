import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class GitHubService{
    private name:string;
    private client_id='b0f2b74fdf3c424764d7';
    private client_secret='72b1f838dd8c6247434e653b66b886ef59a8209d';

    constructor(private _http:Http){
        this.name="kumardss";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.name+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.name+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
    }

    updateUser(username:string){
        this.name=username;
    }
}