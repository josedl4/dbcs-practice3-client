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
    }).catch(error => this.error = error);
  }

  check(): boolean {
    if (this.players === undefined) {
      return true;
    } else {
      return this.players.length === 0;
    }
  }
}
