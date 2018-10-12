import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.less']
})
export class PaintComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef;

   // setting a width and height for the canvas
   @Input() public width = window.innerWidth;
   @Input() public height = window.innerHeight;
   @Input() public myWeight: number = 5;
   @Input() public myColor: string = '#000000';
   @Input() public fillColor: string = '#ffffff';
   public fillCanvas: string = '#ffffff';

  private cx: CanvasRenderingContext2D; 
  drawingSubscription: Subscription;
  
  constructor() { } 

  public ngAfterViewInit() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width * 0.6;
    canvasEl.height = this.height * 0.7;

    // set style of the line
   
    this.changeStyle();
    this.cx.lineCap = 'round';

     // we'll implement this method to start capturing mouse events
     this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from teh canvas element
    this.drawingSubscription = fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(e => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      ).subscribe((res: [MouseEvent, MouseEvent]) => {
        //method 'getBoundingClientRect' find the size of the element and its position relative to the window
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });

  }

  drawOnCanvas(prevPos: { x: number; y: number }, currentPos:  { x: number; y: number }) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }    
  
    this.changeStyle();

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }

  }

  toDefault() {
    //returned default value of globalCompositeOperation
    this.cx.globalCompositeOperation = 'source-over'; 
  }

  changeStyle() {
    this.cx.lineWidth = this.myWeight;
    this.cx.strokeStyle = this.myColor;
  }
  
  erase(){ 
    this.cx.globalCompositeOperation = 'destination-out';
    this.myColor = "rgba(255,255,255, 1)";
    this.cx.beginPath();
  }

  clearAll() {
    this.cx.clearRect(0, 0, this.width, this.height);
  }

  ngOnDestroy() {
    // this will remove event lister when this component is destroyed
    this.drawingSubscription.unsubscribe();
  }
}
