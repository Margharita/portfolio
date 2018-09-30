import { Component, OnInit } from '@angular/core';
import { Image } from '../../../assets/classes/sliderImage';
import { SliderService } from '../../../services/sliderService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  images: Image[] = [];

  constructor(private route: ActivatedRoute, private sliderService: SliderService) {
  }

  ngOnInit() {
    //let id = +this.route.snapshot.params['id'];

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
