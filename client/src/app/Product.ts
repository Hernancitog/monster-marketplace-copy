import { Category } from './Category';
import { Status } from './Status';
import { Member } from './Member';

export class Product {
  id: number;
  title: string;
  category: Category;
  subCategory: number;
  status: Status;
  seller: Member;
  buyer: Member;
  price: number;
  postDate: string;
  description: string;
  urlImage: string;


  constructor(id: number, title: string, category: Category, subCategory: number, status: Status, seller: Member, buyer: Member, price: number, postDate: string, description: string, urlImage: string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.subCategory = subCategory;
    this.status = status;
    this.seller = seller;
    this.buyer = buyer;
    this.price = price;
    this.postDate = postDate;
    this.description = description;
    this.urlImage = urlImage;
  }
}
