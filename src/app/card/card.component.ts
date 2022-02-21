import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  emp=[{
    name:"Manusha",
    email:"manusha@mail.com",
    city:"Eluru",
    age:21  }]

constructor(public fb: FormBuilder) { }

userForm = this.fb.group({
  name: ['Manusha'],
  email: ['manusha@mail.com'],
  city: ['Eluru'],
  age: ['21']
})

onSubmit(ref: any) {
  let values = ref.value
  console.log(values)
  this.emp.splice(0,this.emp.length)
  this.emp.push(values)

}

  ngOnInit(): void {
  }

}
