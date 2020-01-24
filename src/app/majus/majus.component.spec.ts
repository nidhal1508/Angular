import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajusComponent } from './majus.component';

describe('MajusComponent', () => {
  let component: MajusComponent;
  let fixture: ComponentFixture<MajusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
