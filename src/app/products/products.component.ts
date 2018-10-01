import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  
   
  constructor(private _router: Router){
  }

  ngOnInit() {
    
  }

  isChildActive(): boolean {
    if( this._router.isActive('/products/slider', true) ||
    this._router.isActive('/products/calc', true) ||
    this._router.isActive('/products/todo', true)) {
      return true;
    } else { return false;}
     
  }
 

}
