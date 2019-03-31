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
  studentId: string = '';
  constructor(private _commonService: CommonService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const list = this._commonService.studentList;
    this.studentId = this._route.snapshot.paramMap.get('id');
    this.studentDetail = this._commonService.studentDetail;
    if (!this.studentDetail || !Object.keys(this.studentDetail).length) {
      this._commonService.getStudentById(this.studentId).subscribe(res => {
        if (res.data) {
          this.studentDetail = res.data;
          this._commonService.studentDetail = this.studentDetail;
        }
      })
    }
  }

}
