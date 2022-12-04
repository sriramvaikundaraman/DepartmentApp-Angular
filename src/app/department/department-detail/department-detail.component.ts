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
      this.departmentService.getDept().subscribe(res =>{
        let filteredArr = res.filter(data => data.id == this.deptId);
        this.dept = filteredArr;
        console.log(this.dept);
      })
  });
   }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId = id;
    //console.log(id);
    this.departmentService.getDept().subscribe(res =>{
      let filteredArr = res.filter(data => data.id == id);
      this.dept = filteredArr;
      //console.log(this.dept);
    })
  }

}