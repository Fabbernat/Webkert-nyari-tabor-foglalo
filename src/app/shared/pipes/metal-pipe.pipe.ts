import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metalPipe'
})
export class MetalPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return "This is a metal pipe.";
  }

}
