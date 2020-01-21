import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hblock1Component } from './hblock1.component';

describe('Hblock1Component', () => {
  let component: Hblock1Component;
  let fixture: ComponentFixture<Hblock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hblock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hblock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
