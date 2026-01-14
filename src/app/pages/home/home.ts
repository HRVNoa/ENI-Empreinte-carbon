import { Component } from '@angular/core';
import {EcoButton} from '../../components/template/eco-button/eco-button';
import {RouterLink} from '@angular/router';
import {User} from '../../services/user';
import {EcoInput} from '../../components/template/eco-input/eco-input';
import {FormsModule} from '@angular/forms';
import {EcoDivider} from '../../components/template/eco-divider/eco-divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EcoButton,
    RouterLink,
    EcoInput,
    FormsModule,
    EcoDivider
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public userName: string = '';

  constructor(private userService :User) {
  }

  login(username :string): void {
    this.userService.login(username);
  }
}
