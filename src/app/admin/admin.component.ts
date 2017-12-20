import { Component, OnInit } from '@angular/core';

import { Player } from '../shared/model/player';
import { Team } from '../shared/model/team';
import { Competition } from '../shared/model/competition';
import { AdminService } from './admin.service';

/**
 * Componente del admin
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  players: Player[];
  playerSelected: Player;

  teams: Team[];
  teamSelected: Team;

  competitions: Competition[];
  competitionSelected: Competition;

  error: any;
  errorMessage = '';
  errorHidden = true;
  successHidden = true;

  constructor(private adminService: AdminService) { }

  /**
   * Función onInit, se ejecuta al iniciar
   */
  ngOnInit() {
    this.getCompetitions();
  }

  /**
   * Obtiene las competiciones del servicio
   */
  getCompetitions(): void {
    this.adminService.getLeagues().then(competitions => {
      this.competitions = competitions;
      this.competitionSelected = undefined;
      this.teams = undefined;
      this.teamSelected = undefined;
      this.players = undefined;
      this.playerSelected = undefined;
    }).catch(error => this.error = error);
  }

  /**
   * Obtiene los equipos del servicio
   */
  getTeams(): void {
    this.adminService.getTeams(this.competitionSelected.id).then(teams => {
      this.teams = teams;
      if (this.teams.indexOf(this.teamSelected) < 0) {
        this.teamSelected = undefined;
      }
      this.players = undefined;
      this.playerSelected = undefined;
    }).catch(error => this.error = error);

  }

  /**
   * Obtiene los jugadores del servicio
   */
  getPlayers(): void {
    this.adminService.getPlayers(this.teamSelected.playersAPI).then(players => {
      this.players = players;
      this.playerSelected = undefined;
    }).catch(error => this.error = error);
  }

  /**
   * Se añade el jugador empleando el servicio
   */
  importPlayer(): void {
    console.log(this.competitionSelected);
    console.log(this.teamSelected);
    console.log(this.playerSelected);

    this.adminService.importPlayer(this.playerSelected).then(response => {
      this.successHidden = false;
      this.errorHidden = true;
    }).catch((error: any) => {
      this.errorHidden = false;
      this.successHidden = true;
      if (error.status === 400) {
        this.errorMessage = 'Player not valid';
      } else {
        this.errorMessage = 'An error has occured';
      }
    });
  }

  hideTeams(): boolean {
    if (this.competitionSelected === undefined || this.competitionSelected === null) {
      return true;
    } else {
      return false;
    }
  }

  hidePlayers(): boolean {
    if (this.teamSelected === undefined || this.teamSelected === null) {
      return true;
    } else {
      return false;
    }
  }

  buttonDisabled(): boolean {
    if (this.playerSelected === undefined || this.playerSelected === null) {
      return true;
    } else {
      return false;
    }
  }

}
