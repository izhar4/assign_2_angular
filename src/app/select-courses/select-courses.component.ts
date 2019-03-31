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
  savedCourses: any[] = [];
  constructor(private _route: ActivatedRoute, private _commonService: CommonService) { }

  ngOnInit() {
    this.studentId = this._route.snapshot.paramMap.get('studentId');
    this.program = this._route.snapshot.paramMap.get('program');
    this.studentDetail = this._commonService.studentDetail;

    if (!this.studentDetail || !Object.keys(this.studentDetail).length) {
      this._commonService.getStudentById(this.studentId).subscribe(res => {
        if (res.data) {
          this.studentDetail = res.data;
          this.getCourseByProgram()
          this._commonService.studentDetail = this.studentDetail;
        }
      })
    } else {
      this.getCourseByProgram()
    }

  }

  getCourseByProgram() {
    this._commonService.getCourseByProgram(this.program).subscribe(res => {
      if (res.data) {
        this.courseList = res.data;
        this.courseList.forEach(course => {
          Object.keys(course).forEach(key => {
            if (course[key] === 'Y') {
              const day = course[key];
              course['day'] = this.days[key];
            }
          })
        })
        this.mapData()

      }
    })
  }

  saveCourse(course) {
    course.saved = true;
    this.savedCourses.push(course);
  }

  removeCourse(course) {
    course.saved = false;
    this.savedCourses = this.savedCourses.filter(data => {
      return data._id !== course._id;
    })
  }

  clear() {
    this.savedCourses = [];
    this.courseList.forEach(data => {
      if (data.saved) {
        data.saved = false;
      }
    })
  }

  saveCourses() {
    this._commonService.saveCourses(this.savedCourses, this.studentId).subscribe(res => {
      if (res.data) {
        this._commonService.studentDetail = res.data;
      }
    })
  }

  mapData() {
    if (this.studentDetail.coursesSaved) {
      const savedCourseIds = this.studentDetail.coursesSaved.map(value => value._id);
      if (savedCourseIds.length) {
        this.courseList.forEach(data => {
          console.log(data)
          if (savedCourseIds.indexOf(data._id) >= 0) {
            data.saved = true;
            this.savedCourses.push(data);
          }
        })
      }
    }
  }

}
