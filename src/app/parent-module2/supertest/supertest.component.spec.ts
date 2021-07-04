import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertestComponent } from './supertest.component';

describe('SupertestComponent', () => {
  let component: SupertestComponent;
  let fixture: ComponentFixture<SupertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupertestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
