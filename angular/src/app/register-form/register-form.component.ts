import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  formProfile!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formProfile = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      // country: new FormControl('',[
      //   Validators.required,
      //   Validators.required,
      //   Validators.minLength(3)
      // ]),
      // age: new FormControl('',[
      //   Validators.min(18)
      // ]),
      // gender: new FormControl('',[
      //   Validators.required
      // ]),
      // phone: new FormControl('',[
      //   Validators.required,
      // ]),
      // password : new FormControl('',[
      //   Validators.required,
      //   Validators.minLength(6),
      // ]),
      // confirmPassword : new FormControl('',[
      //   Validators.required,
      //   Validators.minLength(6),
      // ])
    })
  }
  onSubmitForm() {
    console.log(this.formProfile.value)
  }

}
