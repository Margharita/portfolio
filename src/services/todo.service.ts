import { Task } from '../shared/task';
//import { User } from '../shared/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskOperationResult } from '../shared/task.operation.result';


@Injectable()

export class TaskService {
    http: any;
    constructor(private httpClient: HttpClient) {}

    getTaskOnServer(): Observable<Task[]> {
        // tslint:disable-next-line:prefer-const
        let obsResult = this.httpClient.get<Task[]>('https://repetitora.net/api/JS/Tasks?page=1&widgetId=2323&count=30');
        return obsResult;
    }

    postTaskOnServer(title: string): Observable<TaskOperationResult> {
        const postResult: Observable<TaskOperationResult> = this.httpClient
        .post<TaskOperationResult>('https://repetitora.net/api/JS/Tasks', {
            widgetId: 2323,
            title: title
        });
        return postResult;
    }

    deleteTaskOnServer(id: string): Observable<any> {
        const postResult = this.httpClient.delete<any>('https://repetitora.net/api/JS/Tasks?widgetId=2323&taskId=' + id);
        return postResult;
    }

    putTaskOnServer(id, done: boolean): Observable<any> {
        const putResult = this.httpClient.put<any>('https://repetitora.net/api/JS/Tasks?taskId=' + id, {
            widgetId: 2323,
            done: done,
        });
        return putResult;
    }

    changeTaskNameOnServer(id, title: string): Observable<any> {
        const putResult = this.httpClient.put<any>('https://repetitora.net/api/JS/Tasks?taskId=' + id, {
            widgetId: 2323,
            title: title,
        });
        return putResult;
    }

    onLogin(email: string, password: string, rememberMe: boolean, captcha: string): Observable<any> {
        debugger;
        const postResult: Observable<any> = this.httpClient.post<any>('https://repetitora.net/api/auth/login', {
            email: email,
            password: password,
            rememberMe: true,
            captcha: captcha
        });
        return postResult;
    }

    getCaptcha(): Observable<any> {
        // tslint:disable-next-line:prefer-const
        let getUrl = this.httpClient.get<string>('https://repetitora.net/Auth/Security/GetCaptchaUrlAddress');
        return getUrl;
    }

}