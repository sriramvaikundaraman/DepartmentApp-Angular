import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Router } from '@angular/router'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  protected dept : Department[];

  constructor(public departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.departmentService.getDept().subscribe(res =>{
      this.dept = res;
    })
  }

  onSelect(d: any)
  {
      this.router.navigate(['/detail', d.id])
  }

}
