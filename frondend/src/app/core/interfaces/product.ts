import {Creator} from './creator';
import {Bid} from './bid';

export interface Product {
  _id: string;
  endString: string;
  image: string | null;
  title: string;
  description: string;
  endTime: string;
  startPrice: string;
  creator: Creator;
  createTime: string;
  isOwner: boolean;
  bids: Bid[];
  priceValue: number;
}
