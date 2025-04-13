import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/message`;

  message: string = '';

  constructor(private http: HttpClient) { }

  add(message: string): void {
    this.message = message;

    setTimeout(() => {
      this.clear()
    }, 4000);
  }

  clear(): void {
    this.message = '';
  }
}
