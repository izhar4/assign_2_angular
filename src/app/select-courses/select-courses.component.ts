import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-select-courses',
  templateUrl: './select-courses.component.html',
  styleUrls: ['./select-courses.component.css']
})
export class SelectCoursesComponent implements OnInit {
  studentId;
  program;
  studentDetail: any = {};
  courseList: any[] = []
  days = { classMon: 'Monday', classTue: 'Tuesday', classWed: 'Wednesday', classThu: 'Thursday', classFri: 'Friday' };
  constructor(private _route: ActivatedRoute, private _commonService: CommonService) { }

  ngOnInit() {
    this.studentId = this._route.snapshot.paramMap.get('studentId');
    this.program = this._route.snapshot.paramMap.get('program');
    this.studentDetail = this._commonService.studentDetail;
    if (!this.studentDetail || !Object.keys(this.studentDetail).length) {
      this._commonService.getStudentById(this.studentId).subscribe(res => {
        if (res.data) {
          this.studentDetail = res.data;
          this._commonService.studentDetail = this.studentDetail;
        }
      })
    }

    this.getCourseByProgram()
  }

  getCourseByProgram() {
    this._commonService.getCourseByProgram(this.program).subscribe(res => {
      if (res.data) {
        this.courseList = res.data;
        this.courseList.forEach(course => {
          Object.keys(course).forEach(key=>{
            if(course[key]=== 'Y'){
              const day = course[key];
              course['day'] = this.days[key];
            }
          })
        })
      }
    })
  }

}
