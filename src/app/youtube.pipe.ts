import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(
    private dom:DomSanitizer
  ){}

  transform(value: string) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
