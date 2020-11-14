import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';

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
    });
  }

  getProducts() {
    this.productService.getAll(this.skip, this.take).subscribe(products => {
      console.log(products);
      this.products = products;
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
    this.skip = event.pageIndex * event.pageSize;
    this.take = event.pageSize;
    this.router.navigate(['/product/all'], {
      queryParams: {skip: this.skip, take: this.take},
      fragment: 'paginator',
      preserveFragment: true
    });
  }
}
