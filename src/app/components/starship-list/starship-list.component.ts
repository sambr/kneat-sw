import { Component, OnInit, Input } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  @Input() distanceMGLT: number;
  
  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
  }

}
