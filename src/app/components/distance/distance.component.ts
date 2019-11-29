import { Component, OnInit } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})

export class DistanceComponent implements OnInit {

  constructor(private starshipService: StarshipService) { }

  distanceMGLT: number = 1000000;

  ngOnInit() {
    this.starshipService.fillStarships();
  }

}
