
import { MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sujet de mon projet: ';
  displayedColumns: string[] = [
    'Id',
    'FirstName',
    'LastName',
    'Email',
    'Gender',
    'JobTitle',
  ];
  Emp: Employee[] = [
    {
      Id: 1,
      FirstName: 'Jacques',
      LastName: 'LIU',
      Email: 'jacques.liu@ouidou.fr',
      Gender: 'H',
      JobTitle: 'Stagiaire Informatique',
    },
    {
      Id: 2,
      FirstName: 'Eldin',
      LastName: 'Astbery',
      Email: 'eastbery1@geocities.jp',
      Gender: 'M',
      JobTitle: 'Senior Editor',
    },
    {
      Id: 3,
      FirstName: 'Nahum',
      LastName: 'Mounce',
      Email: 'nmounce2@vk.com',
      Gender: 'M',
      JobTitle: 'Programmer II',
    },
    {
      Id: 4,
      FirstName: 'Gallard',
      LastName: 'Standell',
      Email: 'gstandell3@europa.eu',
      Gender: 'M',
      JobTitle: 'Account Representative II',
    },
    {
      Id: 5,
      FirstName: 'Koenraad',
      LastName: 'Domleo',
      Email: 'kdomleo4@cornell.edu',
      Gender: 'M',
      JobTitle: 'Quality Control Specialist',
    },
    {
      Id: 6,
      FirstName: 'Uriah',
      LastName: 'Turbat',
      Email: 'uturbat5@aol.com',
      Gender: 'M',
      JobTitle: 'Accounting Assistant II',
    },
    {
      Id: 7,
      FirstName: 'Waldemar',
      LastName: 'Fowley',
      Email: 'wfowley6@sun.com',
      Gender: 'M',
      JobTitle: 'Account Coordinator',
    },
    {
      Id: 8,
      FirstName: 'Rodolfo',
      LastName: 'Trenchard',
      Email: 'rtrenchard7@yandex.ru',
      Gender: 'M',
      JobTitle: 'Data Coordiator',
    },
    {
      Id: 9,
      FirstName: 'Konstance',
      LastName: 'Dudek',
      Email: 'kdudek8@techcrunch.com',
      Gender: 'F',
      JobTitle: 'Administrative Assistant I',
    },
    {
      Id: 10,
      FirstName: 'Monti',
      LastName: 'Perton',
      Email: 'mperton9@youtube.com',
      Gender: 'M',
      JobTitle: 'Operator',
    },
  ];
}
export interface Employee {
  Id : number,
  FirstName:string,
  LastName:string,
  Email:string,
  Gender:string,
  JobTitle:string
}

