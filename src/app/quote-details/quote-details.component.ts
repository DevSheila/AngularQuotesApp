import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class quotyComponent implements OnInit {
  @Input()
  quoty!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

  active =false;
 
  upvote(){
    this.quoty.likes+=1;
    this.active = true;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }
  

  upVotes: number[] = [];

  highestVotes(){

  this.upVotes.push(this.quoty.likes)
    
    var max = this.upVotes.reduce(function(a, b) {
    return Math.max(a, b);
      });
      // console.log(this.upVotes.length)
      this.upVotes.forEach((upVote)=>{
        console.log(upVote)
      })
     
      if(this.quoty.likes === max){
        console.log(this.upVotes)

      }
    
  }


  constructor() { }

  ngOnInit() {
  }

}
