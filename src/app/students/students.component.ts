import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsList:any = [];

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService.getStudentsList().subscribe(res=>{
      this.studentsList  = res.data || [];
      this.studentsList.forEach(element => {
        if(element.birthDate){
          element.birthDate = new Date(element.birthDate).toDateString();
        }
      }); 
    })
  }

}
