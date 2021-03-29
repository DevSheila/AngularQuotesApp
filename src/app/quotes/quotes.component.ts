import { Component, OnInit } from '@angular/core';
//importing the quote class
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
   title = 'Quoty Corner';
  quotes:Quote[] = [
    new Quote (1,'Nick Viche','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2020,7,12),0,0),
    new Quote (2,'Travis Baker',"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",'Steve Jobs',new Date(2019,6,3),0,0),
    new Quote (3,'Harry Potter',"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",'Oprah Winfrey',new Date(2020,7,17),0,0),
    new Quote (4,'Ginny Sturgis',"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",'James Cameron',new Date(2020,7,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm(`Sure you wanna delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index:any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
