import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {

  login(username :string, password :string): void {
    if (password == 'azertyuiop'){
      const user = {pseudo: username};
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  logout() {
    localStorage.removeItem("user")
  }

  getUserName() {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('user')!).pseudo;
    }
  }

  isLogged() {
    const user = localStorage.getItem('user')
    return !!user;
  }

  getUser() {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('user')!);
    }
  }

}
