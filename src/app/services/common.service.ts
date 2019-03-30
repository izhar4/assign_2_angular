import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class CommonService {
    public static studentList:any[] = [];
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getStudentsList():Observable<any>{
        const url = this.baseUrl + 'getStudentsList';
        return this.http.get(url);
    }

    getCourseList():Observable<any>{
        const url = this.baseUrl + 'getCourseList';
        return this.http.get(url);
    }

    public get studentList(){
        return CommonService.studentList;
    }

    public set studentList(list:any[]){
        CommonService.studentList = list;
    }

}