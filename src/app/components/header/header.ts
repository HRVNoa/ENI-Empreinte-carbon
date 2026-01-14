import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Profile} from '../profile/profile';
import {User} from '../../services/user';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    Profile,
    TitleCasePipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public nomUtilisateur? : string;

  constructor(private userService :User) {
  }

  getUsername(){
    return this.userService.getUserName()
  }

}
