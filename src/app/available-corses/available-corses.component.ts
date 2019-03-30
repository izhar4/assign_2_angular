import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-available-corses',
  templateUrl: './available-corses.component.html',
  styleUrls: ['./available-corses.component.css']
})
export class AvailableCorsesComponent implements OnInit {
  courseList :any[]= [];
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService.getCourseList().subscribe(res=>{
      this.courseList  = res.data || [];
      this.courseList.forEach(element => {
        // if(element.birthDate){
        //   element.birthDate = new Date(element.birthDate).toDateString();
        // }
      });
    })
  }

}
