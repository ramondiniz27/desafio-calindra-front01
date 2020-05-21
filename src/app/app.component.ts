import { Component, OnInit } from '@angular/core';
import { OmeleteService } from './services/omelete.service';
import {_} from 'lodash'
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products 
  public store = environment.OMELETE_STORE_URL
  constructor( private service: OmeleteService ) {
  }
  
  ngOnInit(): void {
    this.getSearchProducts('superman')
  }
  
  searchProduct(event, search){
    if(event.key !== 'Backspace'|| 'Delete'){
      this.getSearchProducts(search)
    }
  }

  getSearchProducts(search) {
    this.service.getProducts(search)
      .subscribe(result =>{
        if(result !== null || undefined ) {
          let formatted = JSON.stringify(result['items']).replace('/store', '')
          this.products = JSON.parse(formatted)        
        }
      })
  }
}