import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildResultComponent } from './child-result.component';

describe('ChildResultComponent', () => {
  let component: ChildResultComponent;
  let fixture: ComponentFixture<ChildResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildResultComponent]
    });
    fixture = TestBed.createComponent(ChildResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
