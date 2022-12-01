import { DepartmentService } from './../../department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  private deptId;
  protected dept : Department | null;

  constructor(private route: ActivatedRoute, public departmentService: DepartmentService) {
    this.route.params.subscribe((params: any) => {
      this.deptId = params['id'];
      console.log(this.deptId);
      this.departmentService.getDeptById(this.deptId).subscribe(res =>{
        this.dept = res;})
  });
   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId = id;
    console.log(id);
    this.departmentService.getDeptById(this.deptId).subscribe(res =>{
      this.dept = res;
    })
  }

}