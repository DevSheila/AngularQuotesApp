import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quote(0,"","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.quoted);
    this.quoted = new Quote(0,"","","",new Date(),0,0);
  }
  isChanged: boolean = false
    modelChanged(value: any) {
      console.log('model changed')
    
      this.isChanged = true
      setTimeout(() => {
          this.isChanged = false
      }, 1000);
    }
  
  constructor() { }

  ngOnInit() {
  }

}
