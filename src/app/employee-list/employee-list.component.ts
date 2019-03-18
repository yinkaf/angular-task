import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
  // styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employees$ = new Observable<Employee[]>();
  showEmployee = false;
  selectedEmployee: Employee;
  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees(): void {
   this.employees$ = this.employeeService.getEmployees();
  }

  add(): void {
    this.selectedEmployee = null;
    this.showEmployee = true;
  }
  delete(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.id).subscribe(()=> this.loadEmployees());
  }
  edit(employee: Employee): void {
    this.selectedEmployee = employee;
    this.showEmployee = true;
  }

  onSaved(status: boolean) {
    this.selectedEmployee = null;
    this.loadEmployees();
    this.showEmployee = false;
  }
}
