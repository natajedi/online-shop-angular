import { Injectable } from '@angular/core;

@Injectable({
provideIn: 'root'
})
export class ProductsService {

url: string = 'http://localhost:3000/products';
constructor(private http: HttpClient) {}
getProducts (){
return.this.http.get<IProducts[]>(this.url);
}

getProduct(id: number){
return.this.http.get<IProducts>[`${this.url}/${id}`);
}
