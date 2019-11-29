import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceComponent } from './distance.component';
import { StarshipService } from 'src/app/services/starship.service';

describe('DistanceComponent', () => {
  let component: DistanceComponent;
  let fixture: ComponentFixture<DistanceComponent>;

  it('should create', () => {
    component = new DistanceComponent(new StarshipService());
    expect(component).toBeTruthy();
  });
});
