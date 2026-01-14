import {Component, Input} from '@angular/core';
import {User} from '../../services/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  @Input() username?: string;

  constructor(private userService :User, private router: Router) {
  }

  logOut(){
    this.userService.logout();
    this.router.navigate(['/']);
  }


}
