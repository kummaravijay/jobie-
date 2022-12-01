import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobiboxComponent } from './jobibox.component';

describe('JobiboxComponent', () => {
  let component: JobiboxComponent;
  let fixture: ComponentFixture<JobiboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobiboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobiboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
