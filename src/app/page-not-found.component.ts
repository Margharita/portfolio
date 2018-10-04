import { Component } from '@angular/core';

@Component({
    template:`
    <div class="not-found">
        <div class="not-found-img"></div>
        <div class="not-found-text">
            <h1>Error 404</h1>
            <p>Woops! Looks like this page doesn't exist.</p>
            <button class="btn btn-info" routerLink="/">Go to homepage</button>
        </div>
    </div>
    `,
    styles: [`
    .not-found {
        text-align: center;
    }
    .not-found-img {
        background: url('./assets/images/5845e1677733c3558233c0ee.png') no-repeat;
        background-size: contain;
        display: inline-block;
        width: 230px;
        height: 200px;
    }
    .not-found-text{
        display: inline-block;
    }
    `]
})
export class PageNotFoundComponent { }