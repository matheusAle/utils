import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadInputComponent } from './load-input.component';

describe('LoadInputComponent', () => {
  let component: LoadInputComponent;
  let fixture: ComponentFixture<LoadInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
