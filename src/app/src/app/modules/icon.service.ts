import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  public resultIcon = new Subject<string>();
  resultI$ = this.resultIcon.asObservable();

  constructor() { }

  sendIcon(val: string): void{
    this.resultIcon.next(val);
  }
}
