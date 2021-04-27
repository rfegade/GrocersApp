import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, EmailValidator, Validators} from '@angular/forms'
import { RegistrationService } from '../service/registration.service'
import { CustomValidator } from '../custom-validator/custom-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private registrationService : RegistrationService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('' , Validators.required),
      email : new FormControl('' , [Validators.required, Validators.email]),
      mobile : new FormControl('' , Validators.required),
      password : new FormControl('' , Validators.required),
      confirmPassword : new FormControl('' , Validators.required),
      dob : new FormControl('' , Validators.required)
    }, {validators: [CustomValidator.validatePassword], updateOn:'blur'})
  }


  register() {
    this.registrationService.register(this.registrationForm.value).subscribe((result) => {
      //console.log(result);   
      if(result.status === "success") {
        this.snackBar.open("User registration is successful, please login to access your account", 'Registration', {
          duration: 1000
        });
      }   
    }) 
  }



}
