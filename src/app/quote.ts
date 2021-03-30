// import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

export class Quote {
 
  showInfo: boolean;



  // id
  // name
  // quote
  // author
  // date posted 
  // likes
  // dislikes
constructor(public id:number,
  public name:string,
  public quote:string,
  public author:string, 
  public datePosted: Date,
  public likes:number,
   public dislikes:number)
   {
    this.showInfo=false;
  }
}
