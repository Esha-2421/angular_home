import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishers2Component } from './publishers2.component';

describe('Publishers2Component', () => {
  let component: Publishers2Component;
  let fixture: ComponentFixture<Publishers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publishers2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Publishers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
