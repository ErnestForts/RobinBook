import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() starId;
  @Input() rating;

  @Output() starEnter: EventEmitter<number> = new EventEmitter();
  @Output() starLeave: EventEmitter<number> = new EventEmitter();
  @Output() starClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStarEnter(){
    this.starEnter.emit(this.starId);
    // console.log(this.starId);
    
  }

  onStarLeave(){
    this.starLeave.emit();
    // console.log(this.starId);
  }

  onStarClicked(){
    this.starClicked.emit(this.starId)
    // console.log(this.starId);
  }

}
