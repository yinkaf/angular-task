# AngularTask

## Requirements

This angular application provides the following functionality:-

- Display a login page which caputres username and password.
- Display an employees list page with shows a list of employees.
- There is a add button on the employees page to add a new employee.
- The employee data contains id, name and department.
- From the employee list page each employee can be edited and deleted.
- The new employee and edit employee page are shown on the same page as the employee list page.
- When en employee is either created or edited, the employee page is refreshed.

## Implementation

The application used Angular Router to route to components.

The following routes are available

- /login Routes to the LoginComponent
- /employees Routes to the EmployeesListComponent

The app contains 3 components.
- __LoginComponent__ This components presents the Login page. It uses Reactive Forms and makes sure that the login button is disabled until both username and password fields are populated. When the login button is pressed the route /employees is navigated to using the Router.

- __EmployeeListComponent__ This presents the Employee list page. OnInit it fetches the list of employees using the EmployeeService. It stores the ```observable<Employee>```.
  It embeds the EmployeeComponent and controls the visibility of the component using a boolean.
  It subscribes to the emitted property in EmployeeComponent and dismisses the EmployeeComponent and reloads the data.
  
- __EmployeeComponent__ This allows an employee to be created or updated. It has an @Input property of type Employee.
It uses Reactive Forms to hold the form data and disables the save button until the form is valid. It monitors changes to the employee property and updates the Reactive Forms accordingly.
It has an @Output property that it uses to notify is the form has been saved or closed.

There is a model class for employee.
- __model/Employee.ts__

There are 2 service class
- __service/employee.service.ts__ This service provides methods to perform rest calls on the /api/employees rest endpoint. It used HTTPClient to make the calls and return observables;

- __service/in-memmory-data.service.ts__ This is an in memory database that intercepts http calls to the url /api/employees. This provides a way to store the employee data in memory

This app contains the following file structure
![File Struvture](/doc/FileStructure.png)

