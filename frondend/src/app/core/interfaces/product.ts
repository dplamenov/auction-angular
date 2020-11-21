import {Creator} from './creator';

export interface Product {
  endString: string;
  image: string | null;
  _id: string;
  title: string;
  description: string;
  endTime: string;
  startPrice: string;
  creator: Creator;
  createTime: string;
  isOwner: boolean;
  bids: [];
}
