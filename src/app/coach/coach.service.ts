import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import { Player } from '../shared/model/player';

/**
 * Servicio para acceder a los recursos del entrenador
 */
@Injectable()
export class CoachService {

  private coachUrl = 'http://localhost:8080/dbcs-practice3-server/webresources/coach';

  constructor(private http: Http) { }

  /**
   * Obtener jugadores del equipo
   */
  getPlayersInTeam(): Promise<Array<Player>> {
    const url = this.coachUrl + '/' + localStorage.getItem('username')
    + '/jugadores';

    return this.http.get(url).toPromise().then(response => {
      let players: Player[] = [];
      let player: Player;

      for (let i = 0; i < response.json().length; i++) {
        player = new Player(
          response.json()[i].contractuntil,
          response.json()[i].dateofbirth,
          response.json()[i].id,
          response.json()[i].jerseynumber,
          response.json()[i].marketvalue,
          response.json()[i].name,
          response.json()[i].nationality,
          response.json()[i].position
        );

        players.push(player);
        }
      return players as Player[];
    }).catch(this.handleError);
  }

  /**
   * Obtener jugadores sin equipo
   */
  getPlayersWithoutTeam(): Promise<Array<Player>> {
    const url = this.coachUrl + '/jugadores';

    return this.http.get(url).toPromise().then(response => {
      let players: Player[] = [];
      let player: Player;

      for (let i = 0; i < response.json().length; i++) {
        player = new Player(
          response.json()[i].contractuntil,
          response.json()[i].dateofbirth,
          response.json()[i].id,
          response.json()[i].jerseynumber,
          response.json()[i].marketvalue,
          response.json()[i].name,
          response.json()[i].nationality,
          response.json()[i].position
        );

        players.push(player);
        }
      return players as Player[];

    }).catch(this.handleError);
  }

  /**
   * Añade jugador al equipo
   * @param playerId
   */
  addPlayer(playerId: number): any {
    const url = this.coachUrl + '/' + localStorage.getItem('username')
    + '/jugador/' + playerId;

    return this.http.post(url, null).toPromise().then(response => {
      return 'ok';
    }).catch(this.handleError);
  }

  /**
   * Elimina jugador del equipo
   * @param playerId 
   */
  deletePlayer(playerId: number): any {
    const url = this.coachUrl + '/' + localStorage.getItem('username')
    + '/jugador/' + playerId;

    return this.http.delete(url).toPromise().then(response => {
      return 'ok';
    }).catch(this.handleError);
  }

  /**
   * Manejador de los errores
   * @param error 
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
