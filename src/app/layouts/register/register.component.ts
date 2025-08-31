import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIcon,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RouterLink,
    MatTooltipModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    this.RegisterForm = this.registerForm();
  }

  // *******Properties*********
  RegisterForm!: FormGroup;
  passwordVisible:boolean = false;
  confirmPassVisible:boolean = false;

  //  ******Services*********
  router = inject(Router);
  formBilder = inject(FormBuilder);

  // RegisterForm
  registerForm: any = () => {
    return this.formBilder.group({
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: this.formBilder.group({
        line1: ['', Validators.required],
        line2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.maxLength(6)]],
        country: ['India'],
      }),
      termsAccepted: [false, Validators.requiredTrue],
    });
  };
  // *************methods**************
  Register = () => {
    if (this.RegisterForm.valid) {
      console.log(this.RegisterForm.value);
      //  this.router.navigate(['/login'])
    } else {
      Object.keys(this.RegisterForm.controls).forEach((fields) => {
        const control = this.RegisterForm.get(fields);
        control?.markAsTouched({ onlySelf: true });
      });
      const address = this.RegisterForm.get('address');
      if (address && address instanceof FormGroup) {
        Object.keys(address.controls).forEach((field) => {
          const control = address.get(field);
          control?.markAsTouched({ onlySelf: true });
        });
      }
    }
  };

  togglePasswordVisibility = ()=>{
    this.passwordVisible = !this.passwordVisible
  }
  toggleConfirmPasswordVisibility = ()=>{
    this.confirmPassVisible = !this. confirmPassVisible
  }
}
