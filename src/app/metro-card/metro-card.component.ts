import { Component, OnInit } from '@angular/core';

interface MetroCard {
  owner: string;
  balance: number;
  isActive: boolean;
}

@Component({
  selector: 'app-metro-card',
  templateUrl: './metro-card.component.html',
  styleUrls: ['./metro-card.component.css']
})

export class MetroCardComponent implements OnInit {

  public metroCards : MetroCard[] = [
    { owner: "Blair", balance: 20, isActive: false },
    { owner: 'Sputnik', balance: 0, isActive: true }, 
    { owner: 'Freddie', balance: 3.5, isActive: true }, 
    {owner:'Luca', balance: -1.90, isActive: true}
  ];

  // stylesList: object = {
  //   'font-style':  isActive    ? 'italic' : 'normal',
  //   'font-weight': balance    ? 'bold'   : 'normal',
  // }

  constructor() { }

  ngOnInit(): void {
  }

  reloadCard(card: MetroCard) {
    console.log("let's add some $$ to your card!");
  }

}
