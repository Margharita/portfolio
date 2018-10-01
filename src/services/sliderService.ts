import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../shared/sliderImage';


@Injectable()

export class SliderService {

images: Image[];
constructor(private httpClient: HttpClient) {}
    
    getImageOfServer(): Observable<any> {
        const imgResult = this.httpClient.get<Image[]>('https://repetitora.net/api/JS/Images');
        return imgResult;
    }
}