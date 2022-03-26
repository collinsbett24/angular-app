
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


interface Data{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://reqres.in';

  private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
                return throwError(() => new Error(`Backend returned code  ${error.status} error response Message`));
      }

//Get current location coordinates
public getLocationService():Promise<any>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(res=>{
        resolve({lng: res.coords.longitude, lat: res.coords.latitude})
      },
      err =>{
        reject(err);
      });
    });
  }


/** POST: add a new userto the database */
public addUser(userData:any):Observable <Data>
    {
      return this.http.post<any>(this.configUrl + '/api/register', userData).pipe(catchError(this.handleError));
      }

public loginUser(loginData:any):Observable <Data>
    {
      return this.http.post<any>(this.configUrl + '/api/login', loginData).pipe(catchError(this.handleError));
      }

 public viewUsers():Observable <any>
            {
              return this.http.get<any>(this.configUrl + '/api/unknown').pipe(catchError(this.handleError));
            }

  public viewOtherUsers():Observable <any>
            {
              return this.http.get<any>(this.configUrl + '/api/users?page=2').pipe(catchError(this.handleError));
            }

public deleteUser(id:any):Observable<any>{
      return this.http.get<any>(this.configUrl + '/api/users/2');
    } 

public GetUser(id:any):Observable<any>{
      return this.http.get<any>(this.configUrl + '/api/users/2').pipe(catchError(this.handleError));
    } 

    /** POST: add a new dormitory to the database */
public UpdateUser(data:any):Observable <any>
    {
      return this.http.put<any>(this.configUrl + '/api/update/2', data).pipe(catchError(this.handleError));
      } 

public getMyAccount():Observable<any>{
      return this.http.get<any>(this.configUrl + '/api/users/2').pipe(catchError(this.handleError));
    } 

public updateMyDetails(myId):Observable <any>
    {
      return this.http.patch<any>(this.configUrl + '/api/update/2', myId).pipe(catchError(this.handleError));
      } 
       
    }