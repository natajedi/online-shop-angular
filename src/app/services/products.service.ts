import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from './../models/products'; // Некорректная ссылка. Возможно такие ошибки есть еще, проверь все импорты

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
// Не забывай форматировать код. Сравни, код выглядел раньше и как выглядит после автоформатирования.
    url: string = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<IProducts[]>(this.url);
    }

    getProduct(id: number) {
        return this.http.get<IProducts>(`${this.url}/${id}`);
    }
}
