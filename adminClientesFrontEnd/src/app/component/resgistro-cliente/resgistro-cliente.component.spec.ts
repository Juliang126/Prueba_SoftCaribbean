import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroClienteComponent } from './resgistro-cliente.component';

describe('ResgistroClienteComponent', () => {
  let component: ResgistroClienteComponent;
  let fixture: ComponentFixture<ResgistroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
