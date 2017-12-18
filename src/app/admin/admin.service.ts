import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import { Player } from '../shared/model/player';
import { Team } from '../shared/model/team';
import { Competition } from '../shared/model/competition';

@Injectable()
export class AdminService {

  private adminUrl = 'http://localhost:8080/dbcs-practice3-server/webresources/admin/jugador';

  constructor(private http: Http) { }

  getLeagues(): Promise<Array<Competition>> {
    const url = 'http://api.football-data.org/v1/competitions/?season=2017';

    return this.http.get(url).toPromise().then(response => {
      let competitions: Competition[] = [];
      let competition: Competition;

      for (let i = 0; i < response.json().length; i++) {
        competition = new Competition(
          response.json()[i].id,
          response.json()[i].caption,
          response.json()[i].league,
          response.json()[i].year,
          response.json()[i].currentMatchday,
          response.json()[i].numberOfMatchdays,
          response.json()[i].numberOfTeams,
          response.json()[i].numberOfGames,
          response.json()[i].lastUpdated
        );
        competitions.push(competition);
      }

      return competitions as Competition[];
    }).catch(this.handleError);
  }

  getTeams(competition: number): Promise<Array<Team>> {
    const url = 'http://api.football-data.org/v1/competitions/'
     + competition + '/teams';

    return this.http.get(url).toPromise().then(response => {
      let teams: Team[] = [];
      let team: Team;

      for (let i = 0; i < response.json().teams.length; i++) {
        team = new Team(
          response.json().teams[i].name,
          response.json().teams[i].code,
          response.json().teams[i].shortName,
          response.json().teams[i]._links.players.href
        );
        teams.push(team);
      }

      return teams as Team[];
    }).catch(this.handleError);
  }

  getPlayers(apiUrl: string): Promise<Array<Player>> {
    const url = apiUrl;

    return this.http.get(url).toPromise().then(response => {
      let players: Player[] = [];
      let player: Player;

      for (let i = 0; i < response.json().players.length; i++) {
        player = new Player(
          response.json().players[i].contractUntil,
          response.json().players[i].dateOfBirth,
          response.json().players[i].id,
          response.json().players[i].jerseyNumber,
          response.json().players[i].marketValue,
          response.json().players[i].name,
          response.json().players[i].nationality,
          response.json().players[i].position
        );
        players.push(player);
      }

      return players as Player[];
    }).catch(this.handleError);
  }

  importPlayer(player: Player): Promise<Response> {
    const url = this.adminUrl;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    player.id = null;
    return this.http.post(url, JSON.stringify(player), { headers: headers })
    .toPromise().then(response => {
      return response;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
