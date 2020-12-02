import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../shared/interfaces/product';
import {ProductService} from '../product.service';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  skip = 0;
  take = 5;
  pageSize = 5;
  sort = 0;

  products: Product[];
  isProductsEmpty = true;

  paginatorLength: number;
  pageSizeOptions = [5, 10, 25, 100];
  pageIndex: number;

  isLoading: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private title: Title) {
    title.setTitle('All products');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const {skip, take, pageSize, sort} = params;

      if (skip) {
        this.skip = skip;
      }

      if (take) {
        this.take = take;
      }

      if (pageSize) {
        this.pageSize = this.pageSizeOptions.includes(Number(pageSize)) ? pageSize : this.pageSize;
      }

      if (sort) {
        this.sort = Number(sort);
      }

      this.getProducts();
      this.getCountOfAllProducts();

      this.pageIndex = this.skip / this.pageSize + 1;
    });
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getAll(this.skip, this.take, this.sort).subscribe(products => {
      this.products = products;
      this.isProductsEmpty = products.length === 0;
      this.isLoading = false;
    });
  }

  getCountOfAllProducts() {
    this.productService.getProductCount().subscribe(paginatorLength => {
      this.paginatorLength = paginatorLength.count;
      this.pageSizeOptions = this.pageSizeOptions.filter(e => {
        return e <= this.paginatorLength;
      });
    });
  }

  pageEvent(event) {
    this.skip = event.pageIndex * event.pageSize;
    this.take = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.router.navigate(['/product/all'], {
      queryParams: {skip: this.skip, take: this.take, pageSize: event.pageSize},
      queryParamsHandling: 'merge'
    });
  }

  sortHandler(sort) {
    this.sort = sort;

    this.router.navigate(['/product/all'], {
      queryParams: {sort},
      queryParamsHandling: 'merge'
    });
  }

  // private sortFn(array, prop, castToNumber = false, type: 'asc' | 'desc' = 'asc') {
  //   return array.slice().sort((a, b) => {
  //     let propA = a[prop];
  //     let propB = b[prop];
  //
  //     if(castToNumber){
  //       propA = Number(propA);
  //       propB = Number(propB);
  //     }
  //
  //   });
  //}
}
