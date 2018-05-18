import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SledecaComponent } from './sledeca.component';

describe('SledecaComponent', () => {
  let component: SledecaComponent;
  let fixture: ComponentFixture<SledecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SledecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SledecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
