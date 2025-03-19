import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  
  @Input() 
  btnText!: string;  
  
  @Output() 
  onSubmit = new EventEmitter<Moment>();

  momentForm!: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new UntypedFormGroup({
      id: new UntypedFormControl(''),
      title: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      image: new UntypedFormControl('')
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit(): void {
    if(this.momentForm.invalid){
      return;
    }

    this.onSubmit.emit(this.momentForm.value);
  }

  onFileSelected(event: any): void{
    const file: File = event.target.files[0];

    this.momentForm.patchValue({image: file});
  }
}
