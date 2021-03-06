import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(todayWithNoTime - value)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001; 
    var dateCount = dateDifferenceSeconds/secondsInADay;

    if (dateCount >= 1 && todayWithNoTime > value){
        return dateCount;
    }
    // else if(dateCounter == 0){
    //     return today
    // }
    else{
        return 0;
    }
  }

}
