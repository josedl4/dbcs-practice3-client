import { Component, OnInit } from '@angular/core';

import { Player } from '../../shared/model/player';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-delete',
  templateUrl: './coach-delete.component.html',
  styleUrls: ['./coach-delete.component.css']
})
export class CoachDeleteComponent implements OnInit {

  players: Player[];
  selectedValue: Player;
  error: any;
  errorMessage = '';
  errorHidden = true;
  successHidden = true;

  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.getPlayersInTeam();
  }

  getPlayersInTeam(): void {
    this.coachService.getPlayersInTeam().then(players => {
      this.players = players;
      this.selectedValue = players[0];
    }).catch(error => this.error = error);
  }

  deletePlayer(): void {
    console.log('Push button');
    this.coachService.deletePlayer(this.selectedValue.id).then(msg => {
      console.log(msg);
      this.getPlayersInTeam();
      this.successHidden = false;
      this.errorHidden = true;
      this.errorMessage = '';
    }).catch(error => {
      this.error = error;
      this.errorHidden = false;
      this.successHidden = true;
      this.errorMessage = 'An error has occured';
    });
  }

  check(): boolean {
    if (this.players === undefined) {
      return true;
    } else {
      return this.players.length === 0;
    }
  }
}
