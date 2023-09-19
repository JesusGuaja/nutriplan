import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasComponent } from './recetas.component';

describe('RecetasComponent', () => {
  let component: RecetasComponent;
  let fixture: ComponentFixture<RecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasComponent]
    });
    fixture = TestBed.createComponent(RecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
