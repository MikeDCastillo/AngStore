import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `products-header.component.html`,

})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc'; // 'desc' will render as the default value on screen with this
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort; // We need to later emit this value and fetch the result
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
}
