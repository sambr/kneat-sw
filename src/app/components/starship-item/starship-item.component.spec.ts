import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipItemComponent } from './starship-item.component';

let component = new StarshipItemComponent();
describe('StarshipItemComponent', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

component.starship = { MGLT: 75, consumables: "2 months", name: "Millenium Falcon"};
component.distanceMGLT = 1000000;

describe('StarshipItemComponent.stop', () => {

  it('should calculate stops', () => {
    let result = component.stop;
    expect(result).toEqual(9);
  });
});