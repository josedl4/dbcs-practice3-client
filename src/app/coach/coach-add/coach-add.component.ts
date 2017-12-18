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
  errorMessage = '';
  errorHidden = true;
  successHidden = true;

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
