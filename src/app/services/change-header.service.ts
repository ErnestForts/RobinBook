import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
  public title: BehaviorSubject<any>;
  
  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }
}

