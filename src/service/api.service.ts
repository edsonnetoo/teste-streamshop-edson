import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";


@Injectable ({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http : HttpClient) { }

    getEventos() {
        return this.http.get<any>("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events")
        .pipe(map((res:any)=> {
            return res;
        }))
    }

    getEventosById(idFilme: string): Observable<any> {
        return this.http.get(`https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/${idFilme}`)
    }

    getCinemas(idFilme: string): Observable<any> {
        return this.http.get(`https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/${idFilme}/theaters`)
    }
}