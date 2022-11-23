import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobgridComponent } from './jobgrid.component';

describe('JobgridComponent', () => {
  let component: JobgridComponent;
  let fixture: ComponentFixture<JobgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
