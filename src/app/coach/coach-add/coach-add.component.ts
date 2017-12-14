import { Component, OnInit } from '@angular/core';

import { Player } from '../../shared/model/player';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-add',
  templateUrl: './coach-add.component.html',
  styleUrls: ['./coach-add.component.css']
})
export class CoachAddComponent implements OnInit {

  players: Player[];
  selectedValue: Player;
  error: any;

  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.getPlayersWithoutTeam();
  }

  getPlayersWithoutTeam(): void {
    this.coachService.getPlayersWithoutTeam().then(players => {
      this.players = players;
      this.selectedValue = players[0];
    }).catch(error => this.error = error);
  }

  addPlayer() {
    console.log('Push button');
    this.coachService.addPlayer(this.selectedValue.id).then(msg => {
      console.log(msg);
      this.getPlayersWithoutTeam();
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
