import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, format?: string): string {
    if (!value) {
      return null;
    }

    if (!format) {
      return moment(value).format("DD/MM/YY, HH:mm");
    } else {
      return moment(value).format(format);
    }
  }
}
