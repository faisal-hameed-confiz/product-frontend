import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../products/products.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

}
