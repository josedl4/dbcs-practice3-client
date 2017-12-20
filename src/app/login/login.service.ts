import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

/**
 * Servicio para acceder al API Rest, para realizar el login
 */
@Injectable()
export class LoginService {
  private url = 'http://localhost:8080/dbcs-practice3-server/webresources';

  constructor(private http: Http) { }

  /**
   * Función para realizar el login
   *
   * @param username 
   * @param password 
   */
  logIn(username: string, password: string): Promise<Response> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url + '/login', JSON.stringify({username, password}), { headers: headers })
      .toPromise()
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  /**
   * Manejador de errores
   *
   * @param error
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
