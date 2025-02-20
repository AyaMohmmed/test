import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  standalone:true,
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {} goToHeader() {   this.router.navigate(['/header']); }
  ngOnInit() {
  }

}
