import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAddComponent } from './coach-add.component';

describe('CoachAddComponent', () => {
  let component: CoachAddComponent;
  let fixture: ComponentFixture<CoachAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
