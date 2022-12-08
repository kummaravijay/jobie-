import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownversionComponent } from './downversion.component';

describe('DownversionComponent', () => {
  let component: DownversionComponent;
  let fixture: ComponentFixture<DownversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
