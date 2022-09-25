import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BACKEND_ORIGIN = "http://localhost:8080"
  $http: HttpClient;

  constructor(http: HttpClient) { 
    this.$http = http;
  }

  getRequest(path: string): Observable<any> {
    return this.$http.get(this.BACKEND_ORIGIN + path);
  }
}

export enum PATHS {
  TECHNOLOGY_FEED_PATH = "/technology-feed"
}