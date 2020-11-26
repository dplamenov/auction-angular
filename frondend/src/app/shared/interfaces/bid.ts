import {Creator} from './creator';
import {Product} from './product';

export interface Bid {
  _id: string;
  priceValue: number;
  creator: Creator | string;
  product: Product | string;
}
