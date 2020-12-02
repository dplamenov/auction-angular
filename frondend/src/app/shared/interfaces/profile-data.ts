import {User} from './user';
import {Product} from './product';
import {Bid} from './bid';

export interface ProfileData {
  user: User
  products: Product[];
  bids: Bid[];
  isUserProfile: boolean;
}
