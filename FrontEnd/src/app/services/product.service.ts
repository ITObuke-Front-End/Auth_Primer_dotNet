import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";
import { Product } from '../models/Product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:51856/api/products/'

  constructor(private http: HttpClient, private userService: UserService) { }

  getProducts() : Observable<Product[]> {
    if(this.userService.user.role==='admins') {
      return this.http.get<Product[]>(this.productsUrl+'admin', this.userService.getOptionsWithToken());
    } else {
      return this.http.get<Product[]>(this.productsUrl+'public', this.userService.getOptionsWithToken());
    }

  }
}
