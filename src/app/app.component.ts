import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cartItems : any;
  constructor(private http : HttpClient , private cartService : CartService){}

  ngOnInit(){
    this.cartService.getAllItems().subscribe((res: any) => {
      this.cartItems = res;
    })
  }
}
