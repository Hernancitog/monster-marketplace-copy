import { Injectable } from '@angular/core';
import { Member} from "./Member";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  getMemberById(id: number): Observable<Member>{
    return this.http.get<Member>('https://monster-marketplace-copy.cfapps.io/product-api/member/' + id);
  }

  registerMember(member: Member): Observable<Object>{
    return this.http.post('https://monster-marketplace-copy.cfapps.io/product-api/member/', member);
  }


  constructor(private http: HttpClient) { }
}
