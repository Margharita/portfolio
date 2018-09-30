import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../assets/classes/sliderImage';


@Injectable()

export class SliderService {

images: Image[];
constructor(private httpClient: HttpClient) {}
    // getImages() {
    //     const newLocal = 'https://pp.userapi.com/c841639/v841639411/65ece/PChS8P_pmE4.jpg';
    //     this.images.push(newLocal);
    // }
    getImageOfServer(): Observable<any> {
        const imgResult = this.httpClient.get<Image[]>('https://repetitora.net/api/JS/Images');
        return imgResult;
    }
}