import { Component } from '@angular/core';
import {EcoButton} from '../../components/template/eco-button/eco-button';
import {Router, RouterLink} from '@angular/router';
import {User} from '../../services/user';
import {EcoInput} from '../../components/template/eco-input/eco-input';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EcoDivider} from '../../components/template/eco-divider/eco-divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EcoButton,
    RouterLink,
    FormsModule,
    EcoDivider,
    ReactiveFormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public form: FormGroup;

  public messageErreur: string = '';

  constructor(private userService :User, private router :Router) {
    this.form = new FormGroup({
      pseudo: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}')]),
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.messageErreur = '';
      this.userService.login(this.form.value.pseudo, this.form.value.password);
      this.router.navigate(['/footprint']);
    } else {
      this.messageErreur = 'Identifiant invalide';
    }
  }
}
