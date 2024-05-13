import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(private http: HttpClient) { }

  getOpenAiResponse(message: string | null | undefined): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ai/simple?message="${message}"`);
  }
}
