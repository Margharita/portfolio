import { Task } from './shared/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskOperationResult } from './shared/task.operation.result';


@Injectable()

export class TaskService {
    constructor(private httpClient: HttpClient) {}

    getTaskOnServer(): Observable<Task[]> {
        let getResult = this.httpClient.get<Task[]>('https://repetitora.net/api/JS/Tasks?page=1&widgetId=2323&count=30');
        return getResult;
    }

    postTaskOnServer(title: string): Observable<TaskOperationResult> {
        let postResult: Observable<TaskOperationResult> = this.httpClient
        .post<TaskOperationResult>('https://repetitora.net/api/JS/Tasks', {
            widgetId: 2323,
            title: title
        });
        return postResult;
    }

    deleteTaskOnServer(id: string): Observable<any> {
        let deleteResult = this.httpClient.delete<any>('https://repetitora.net/api/JS/Tasks?widgetId=2323&taskId=' + id);
        return deleteResult;
    }

    putTaskOnServer(id, done: boolean): Observable<any> {
        let putResult = this.httpClient.put<any>('https://repetitora.net/api/JS/Tasks?taskId=' + id, {
            widgetId: 2323,
            done: done,
        });
        return putResult;
    }

    changeTaskNameOnServer(id, title: string): Observable<any> {
        let putResult = this.httpClient.put<any>('https://repetitora.net/api/JS/Tasks?taskId=' + id, {
            widgetId: 2323,
            title: title,
        });
        return putResult;
    }

}