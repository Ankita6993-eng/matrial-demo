import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.css']
})
export class RectiveFormComponent implements OnInit {
  public profileform : FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) { 
    this.profileform=this.fb.group({
      Name:[''],
      email:['',Validators.required,Validators.email],
      city:[''],
      gender:[''],
      hobby:[''],
      password:[''],
      amount:[''],
      color:[''],
      fontsize:['']
    })

  }
  get myForm() {
    return this.profileform.controls;
  }
  ngOnInit(): void {
  }

}
