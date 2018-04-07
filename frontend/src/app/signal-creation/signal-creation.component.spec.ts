import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCreationComponent } from './signal-creation.component';

describe('SignalCreationComponent', () => {
  let component: SignalCreationComponent;
  let fixture: ComponentFixture<SignalCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
