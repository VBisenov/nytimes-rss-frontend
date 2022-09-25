import { Item } from "./item";

export class RssFeed {
    constructor(
      public pubDate: Date,
      public link: string,
      public image: any,
      public items: Item[]) {
    }
 }
