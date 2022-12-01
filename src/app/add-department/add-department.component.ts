import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
    console.log(data);
    this.http.post('http://localhost:8080/api/add',data)
    .subscribe((result:any)=>{
      console.log("Done");
    })

    window.alert('Department added successfully');
  }

}
