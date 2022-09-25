import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './model/item';
import { RssFeed } from './model/rssFeed';
import { HttpService } from './services/http.service';
import { PATHS } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'nytimes-rss-frontend';
  weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  errorMessages: string[] = [];
  image: any;
  pubDate: Date = new Date();
  link: any;
  items: any;

  constructor(private httpService: HttpService, private router: Router) {
    document.body.className = "body";
    httpService.getRequest(PATHS.TECHNOLOGY_FEED_PATH).subscribe(
      (result: RssFeed) => {
        this.image = result.image;
        this.pubDate = new Date(result.pubDate);
        this.link = result.link;
        this.items = result.items;
      },
      (error: HttpErrorResponse) => this.errorMessages.push(error.message));
  }

  public redirect(link: string) {
    window.location.href = link;
  }

  public buttonClicked() {
    console.log("button clicked");
  }
}