import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {takeLast} from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  skip = 0;
  take = 5;
  products: Product[];

  paginatorLength: number;
  pageSizeOptions = [5, 10, 25, 100];
  pageSize = 5;
  pageIndex: number;

  isLoading: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const {skip, take} = params;

      if (skip) {
        this.skip = skip;
      }

      if (take) {
        this.take = take;
      }

      this.getProducts();
      this.getCountOfAllProducts();

      this.pageIndex =  this.skip / this.pageSize + 1;
      console.log(this.pageIndex);
    });
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getAll(this.skip, this.take).subscribe(products => {
      this.products = products;
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
    // const page = {skip: event.pageIndex * event.pageSize, take: event.pageSize};
    this.skip = (event.pageIndex) * event.pageSize;
    this.take = event.pageSize;

    console.log(event, this.skip, this.take);
    this.pageIndex = event.pageIndex;
    this.router.navigate(['/product/all'], {
      queryParams: {skip: this.skip, take: this.take}
    });
  }
}
