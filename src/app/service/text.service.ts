import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Text } from '../model/text'


@Injectable({
  providedIn: 'root'
})
export class TextService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/texts';
  }

  public findAll(): Observable<Array<Text>> {
    return this.http.get<Array<Text>>(this.url);
  }

}
