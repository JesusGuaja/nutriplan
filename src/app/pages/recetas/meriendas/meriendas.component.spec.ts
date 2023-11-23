import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriendasComponent } from './meriendas.component';

describe('MeriendasComponent', () => {
  let component: MeriendasComponent;
  let fixture: ComponentFixture<MeriendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeriendasComponent]
    });
    fixture = TestBed.createComponent(MeriendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
