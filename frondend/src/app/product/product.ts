export interface Product {
  endString: string;
  image: string | null;
  _id: string;
  title: string;
  description: string;
  endTime: string;
  startPrice: string;
  creator: {
    _id: string,
    email: string
  };
  createTime: string;
  isOwner: boolean;
}
