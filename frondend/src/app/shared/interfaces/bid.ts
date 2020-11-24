import {Creator} from './creator';

export interface Bid {
  _id: string,
  priceValue: number,
  creator: Creator,
  product: string
}
