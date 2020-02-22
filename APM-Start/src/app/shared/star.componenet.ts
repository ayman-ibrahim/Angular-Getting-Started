import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })
  
export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Output() notifyRatingClicked = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onClick(): void {
    this.notifyRatingClicked.emit(`The rating is ${this.rating}`);
  }

}