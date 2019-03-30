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
  studentId: string = '';
  constructor(private _commonService: CommonService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const list = this._commonService.studentList;
    this.studentId = this._route.snapshot.paramMap.get('id');
    if(this.studentId){
      const data = list.filter(data => {
        return data.studentId === this.studentId;
      })
      if(data[0]){
        this.studentDetail = data[0];
      }
    }
  }

}
