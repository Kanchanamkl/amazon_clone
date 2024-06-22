import { Injectable } from '@angular/core';
import { Item } from '../dto/Item_';
import { DUMMY_DATA } from '../dummy-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://127.0.0.1:8081/api/amazon_clone/item/items');
  }
  getItem(code: string): Item | null{
    const item = DUMMY_DATA.find(item => item.itemCode === code);
    
    return item ? item : null;
  }  
}
