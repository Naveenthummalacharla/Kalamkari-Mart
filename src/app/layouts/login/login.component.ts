import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.loginForm = this.loginform();
  }
  private router = inject(Router);

  // ***********properties*********
  passwordVisible: boolean = false;
  isLoading: boolean = true;
  loginForm!: FormGroup;

  // *************Methods************

  loginform = () => {
    return new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  };
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  CreateAccount = () => {
    this.router.navigate(['register']);
  };

  ForgetPassword = () => {
    this.router.navigate(['forget']);
  };

  submitLoginForm = () => {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      Object.keys(this.loginForm.controls).forEach((control) => {
        const controls = this.loginForm.get(control);
        controls?.markAsTouched({ onlySelf: true });
      });
    }
  };
}
