import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBoiComponent } from './big-boi.component';

describe('BigBoiComponent', () => {
  let component: BigBoiComponent;
  let fixture: ComponentFixture<BigBoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
