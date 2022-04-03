import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  itemImageUrl = '../assets/peakyBlinders.png';
  itemImageUrl2 = '../assets/punisherr.png';
  itemImageUrl3 = '../assets/how.png';
  itemImageUrl4 = '../assets/breakingBad.png';
  itemImageUrl5 = '../assets/chernobyl.png';
  itemImageUrl6 = '../assets/peakyBlinders.png';

  constructor() { }

  ngOnInit(): void {
  }

}
