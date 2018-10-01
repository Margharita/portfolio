import { Component, OnInit } from '@angular/core';
import { Image } from '../../../shared/sliderImage';
import { SliderService } from '../../../services/sliderService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  images: Image[] = [];
  currentUrl: string;

  constructor(private route: ActivatedRoute, private sliderService: SliderService) {
    this.currentUrl = ''
  }

  ngOnInit() {    
    const getUrls = this.sliderService.getImageOfServer();
    getUrls.subscribe((data) => {
    this.images = data;
    });
  }

  onNextButton() {
    //debugger;
    this.currentIndex++;
  }

  onPrevButton() {
    //debugger;
    this.currentIndex--;
  }

}
