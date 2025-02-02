import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';
import { User } from '../model/User';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UsersService extends TemplateService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://agripureapi.onrender.com/users';
  }
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.basePath}/${userId}`);
  }
}
