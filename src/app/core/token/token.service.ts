import { Injectable } from '@angular/core';

const KEY = 'accessToken';

@Injectable({ providedIn: 'root'})
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem('accessToken');
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}