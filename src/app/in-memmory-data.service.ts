import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class InMemmoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
    ];
    return {employees};
  }

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }
  constructor() { }
}
