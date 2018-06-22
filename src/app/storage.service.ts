import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  
  public saveItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }
}
