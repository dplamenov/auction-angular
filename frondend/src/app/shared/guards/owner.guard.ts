import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from '../../product/product.service';
import {Product} from '../interfaces/product';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private productService: ProductService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {productId} = next.params;
    return this.productService.getById(productId)
      .pipe(map((product: Product) => product.isOwner), tap((isOwner) => {
        if (!isOwner) {
          this.router.navigate(['/']);
        }
      }));
  }

}
