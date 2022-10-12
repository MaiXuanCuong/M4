import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Component } from './bai3.component';

describe('Bai3Component', () => {
  let component: Bai3Component;
  let fixture: ComponentFixture<Bai3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
