import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hblock2Component } from './hblock2.component';

describe('Hblock2Component', () => {
  let component: Hblock2Component;
  let fixture: ComponentFixture<Hblock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hblock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hblock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
