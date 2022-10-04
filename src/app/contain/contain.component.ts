import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.scss']
})
export class ContainComponent implements OnInit {
  
  mainFormAll: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initMainForm()
  }

  initMainForm(){
    this.mainFormAll = this.fb.group({
      emailFormControl: [null, Validators.required]
    })
  }

}
