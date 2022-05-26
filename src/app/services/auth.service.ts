import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signin(email: string, password: string) {
    const url = 'http://localhost:4000/users/signin';

    return this.httpClient.post(url, { email: email, password });
  }
}
