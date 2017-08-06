import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'circle-component',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  get progress(): number {
    return this._progress;
  }

  @Input()
  public startDegree:number = 0;

  @Input()
  set progress(value: number) {
    this._progress = value;
    this.updateProgress();
  }


  @Input()
  set strokeWidth(value: number) {
    this._strokeWidth = value;
    this.updateRadius();
  }


  @Input()
  set height(value: number) {
    this._height = value;
    this.updateRadius();
  }

  get height(): number {
    return this._height;
  }

  get strokeWidth() {
    return this._strokeWidth;
  }


  @ViewChild('path') path: ElementRef;


  @Input()
  public width: number = 10;

  private _height: number = 10;


  private _strokeWidth: number = 10;

  public circleLength: number = 0;

  public radius: number = 0;

  private _progress: number = 0.5;


  constructor() {
  }

  ngOnInit() {
  }

  updateRadius() {
    this.radius = (this.height / 2) - this.strokeWidth;
    this.updateCircleLength();
  }

  updateCircleLength() {
    this.circleLength = 2 * Math.PI * this.radius;
    this.path.nativeElement.style['stroke-dasharray'] = this.circleLength;
    this.updateProgress();
  }

  updateProgress() {
    this.path.nativeElement.style['stroke-dashoffset'] = (1-this._progress) * this.circleLength;
  }


}
