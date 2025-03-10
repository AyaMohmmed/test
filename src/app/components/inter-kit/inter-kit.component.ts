import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-inter-kit',
  templateUrl: './inter-kit.component.html',
  styleUrls: ['./inter-kit.component.css']
})
export class InterKitComponent implements OnInit {

  selectedDepartment: string = 'HR';
  departments: string[] = ['HR', 'Engineering', 'Marketing', 'Finance', 'Operations'];

  constructor() { }

  ngOnInit() {
  }

}
