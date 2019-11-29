import { TestBed } from '@angular/core/testing';

import { StarshipService } from './starship.service';

const service: StarshipService = new StarshipService();
describe('StarshipService', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('starships', () => {
  it('should fill starships', () => {
    try { service.fillStarships(); }
    catch { service.starships = null; }
    
    expect(service.starships).toBeTruthy();
  });
});
