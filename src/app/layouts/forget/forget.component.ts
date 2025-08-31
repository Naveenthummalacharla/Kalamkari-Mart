import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatTooltipModule,
    RouterLink 
  ],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss'
})
export class ForgetComponent {

router = inject(Router);

enablePasswordFields:boolean = false;
enableOTPFields:boolean = false;
NewpasswordVisible:boolean = false;
ConformpasswordVisible:boolean = false;


toggleNewPasswordVisibility = ()=>{
  this.NewpasswordVisible = !this.NewpasswordVisible 
}
toggleConformPasswordVisibility = ()=>{
  this.ConformpasswordVisible = ! this.ConformpasswordVisible 
}
sentOTP = () =>{
  this.enableOTPFields = !this.enableOTPFields 
}

submitOTP = ()=>{
  this.enablePasswordFields = !this.enablePasswordFields;
}

submitNewPassword = ()=> {
 this.router.navigate(['/login'])
}

}
