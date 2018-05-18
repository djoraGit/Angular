import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaKomponentaComponent } from './nova-komponenta.component';

describe('NovaKomponentaComponent', () => {
  let component: NovaKomponentaComponent;
  let fixture: ComponentFixture<NovaKomponentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaKomponentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaKomponentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
