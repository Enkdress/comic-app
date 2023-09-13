import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// private 112e577ff1e0d8816125e9c6d23abf49039a31b7
// public cc550c9a71ab42bc441a59f506220663
export class MarvelService {
  private apiKey = 'cc550c9a71ab42bc441a59f506220663';
  private baseUrl = 'https://gateway.marvel.com/v1/public';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    const url = `${this.baseUrl}/comics?apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
