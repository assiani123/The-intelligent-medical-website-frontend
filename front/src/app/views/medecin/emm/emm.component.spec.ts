import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmComponent } from './emm.component';

describe('EmmComponent', () => {
  let component: EmmComponent;
  let fixture: ComponentFixture<EmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
