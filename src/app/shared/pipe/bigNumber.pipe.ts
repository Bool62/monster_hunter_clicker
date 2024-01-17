import { DecimalPipe } from "@angular/common";
import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
  name: "appBigNumber",
  standalone: true,
})
export class BigNumberPipe implements PipeTransform {
  transform(value: number, digits?: number): string {
    if (!digits) {
      digits = 2;
    }
    if (value > 1000000) {
      return ((value / 1000000).toFixed(digits) + "").replace(".", "M");
    } else if (value > 1000) {
      return ((value / 1000).toFixed(digits) + "").replace(".", "k");
    } else {
      return value.toFixed(digits);
    }
  }
}
