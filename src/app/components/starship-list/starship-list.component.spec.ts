import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListComponent } from './starship-list.component';
import { StarshipService } from 'src/app/services/starship.service';

describe('StarshipListComponent', () => {
  let component: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;

  it('should create', () => {
    component = new StarshipListComponent(new StarshipService());
    expect(component).toBeTruthy();
  });
});
