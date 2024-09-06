import {Component} from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // name:string = 'alireza';
  addToCard:number=0;
  product = {
    name: 'macbook pro m3 pro',
    image :'../../assets/images/c42fb8fbf94bf01145303d60aa29778d66759575_1723015247.webp',
    color: 'silver',
    price: 117000000,
    discount: 6.5,
    instock: 5,
  }


  getDiscountPrice(): number {
    return ( this.product.price - (this.product.price * this.product.discount) / 100)  ;
  }


  // onNameChange(event:any){
  //   this.name = event.target.value ;
  // }


  addCardValue(event){
    if (this.addToCard<this.product.instock){
      this.addToCard++;

    }
  }

  increaseCardValue(event){

    if(this.addToCard>0){
      this.addToCard--;
    }
  }
}
