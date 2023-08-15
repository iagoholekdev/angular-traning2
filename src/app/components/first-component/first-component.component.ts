import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
   name: string = "Iago";
   age: number = 25;
   address: { street: string, city: string } = { street: "Rua 1", city: "Cidade 1" };
}
