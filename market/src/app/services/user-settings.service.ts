import { Injectable } from '@angular/core';
import { UserSettings } from '../models/user-settings.model';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  login: string = '';
  password: string = '';

  onSubmit(event) {
    event.preventDefault();
    if (this.login.trim() && this.password.trim()) {
      const userMap: UserSettings = {
        login: this.login,
        password: this.password
      }
      localStorage.setItem('isUserLogged', JSON.stringify(true));
      this.login = '';
      this.password = '';
      console.log(userMap);
    }
  }

  isUserLogged(): boolean {
    return localStorage.getItem('isUserLogged') ? JSON.parse(localStorage.getItem('isUserLogged')) : false;
  }
}
