import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentDetail: any = {};
  tentativeCourses:any= [];
  confirmedCourses:any = [];
  // studentId: string = '';
  constructor(private _commonService: CommonService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const list = this._commonService.studentList;
    const studentId = this._route.snapshot.paramMap.get('id');
    if(studentId){
      this._commonService.getStudentById(studentId).subscribe(res=>{
        if(res.data){
          this.studentDetail = res.data;
        }
      })
    }
  }

}
