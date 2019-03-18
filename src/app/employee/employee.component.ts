import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges  {


  constructor(private employeeService: EmployeeService) { }
  @Input() employee: Employee;
  @Output() saved = new EventEmitter<boolean>();
  employeeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
  });
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes.employee.currentValue;
    if(value !== null){
      this.employeeForm.setValue(value);
    } else {
      this.employeeForm.setValue({id: 0, name: '', department: ''});
    }
   // console.log(value);
  }

  save(): void {
    this.employee = null;
    if(this.employeeForm.controls.id.value === 0){
    this.employeeService.addEmployee({name:this.employeeForm.controls.name.value,
      department: this.employeeForm.controls.department.value} as Employee)
          .subscribe(employee => this.saved.emit(true));
    } else {
      this.employeeService.updateEmployee({name:this.employeeForm.controls.name.value,
        department: this.employeeForm.controls.department.value, id: this.employeeForm.controls.id.value} as Employee)
        .subscribe(employee => this.saved.emit(true));
    }
  }
  cancel(){
    this.saved.emit(false);
  }
}
