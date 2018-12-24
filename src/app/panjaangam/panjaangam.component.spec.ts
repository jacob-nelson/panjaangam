import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanjaangamComponent } from './panjaangam.component';

describe('PanjaangamComponent', () => {
  let component: PanjaangamComponent;
  let fixture: ComponentFixture<PanjaangamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanjaangamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanjaangamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
