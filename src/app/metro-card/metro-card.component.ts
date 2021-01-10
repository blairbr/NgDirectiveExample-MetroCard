import { Component, OnInit } from '@angular/core';

interface MetroCard {
  owner: string;
  balance: number;
  active: boolean;
}

@Component({
  selector: 'app-metro-card',
  templateUrl: './metro-card.component.html',
  styleUrls: ['./metro-card.component.css']
})

export class MetroCardComponent implements OnInit {
  public metroCards : MetroCard[] = [{owner: "Blair", balance: 20, active: false}, {owner: 'Sputnik', balance: 0, active: true}, {owner: 'Freddie', balance: 3.5, active: true}, {owner:'Luca', balance: -1.90, active: true}];

  constructor() { }

  ngOnInit(): void {
  }

  reloadCard(card: MetroCard) {
    console.log("let's add some $$ to your card!");
  }

}
