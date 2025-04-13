import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';
import { Moment } from '../interfaces/Moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

    private baseApiUrl = environment.baseApiUrl;
    private apiUrl = `${this.baseApiUrl}api/moments`;
  
    constructor(private http: HttpClient) { }
  
    createMoment(formData: FormData): Observable<FormData> {
      return this.http.post<FormData>(this.apiUrl, formData);
    }

    getMoments(): Observable<Response<Moment[]>> {
        return this.http.get<Response<Moment[]>>(this.apiUrl);
    }
}
