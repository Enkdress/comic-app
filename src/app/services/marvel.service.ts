import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: any[];
  creators: Characters;
  characters: Characters;
  stories: Characters;
  events: Characters;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
}

export interface DateElement {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface URL {
  type: string;
  url: string;
}

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

  getComicsByCharacter(
    characterId: number,
    limit: number = 6
  ): Observable<any> {
    const url = `${this.baseUrl}/comics?apikey=${this.apiKey}&characters=${characterId}&limit=${limit}&orderBy=onsaleDate`;
    return this.http.get(url);
  }

  getComicById(id: number): Observable<any> {
    const url = `${this.baseUrl}/comics/${id}?apikey=${this.apiKey}&`;
    return this.http.get(url);
  }
}