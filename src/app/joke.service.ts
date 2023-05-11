import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, lastValueFrom} from "rxjs";
import { ApiResponse } from "./models";

@Injectable()
export class JokeService {

    constructor(private http: HttpClient) { }
    
    getJokeAsObservable(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
    }

    getJokeAsPromise(): Promise<ApiResponse> {
        return lastValueFrom(
            this.http.get<ApiResponse>('https://official-joke-api.appspot.com/random_joke')
        )
    }

}