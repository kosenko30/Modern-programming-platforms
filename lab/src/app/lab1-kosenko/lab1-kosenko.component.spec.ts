import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1KosenkoComponent } from './lab1-kosenko.component';

describe('Lab1KosenkoComponent', () => {
  let component: Lab1KosenkoComponent;
  let fixture: ComponentFixture<Lab1KosenkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1KosenkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1KosenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
