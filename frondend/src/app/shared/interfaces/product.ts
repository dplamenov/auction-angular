import {Creator} from './creator';
import {Bid} from './bid';
import {Comment} from './comment';

export interface Product {
  _id: string;
  endString: string;
  image: string | null;
  title: string;
  description: string;
  endTime: string;
  startPrice: string;
  creator: Creator | string;
  createTime: string;
  isOwner: boolean;
  bids: Bid[];
  priceValue: number;
  comments: Comment[];
  likes: string[];
}
