import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teminages } from './teminages';

describe('Teminages', () => {
  let component: Teminages;
  let fixture: ComponentFixture<Teminages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teminages],
    }).compileComponents();

    fixture = TestBed.createComponent(Teminages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
