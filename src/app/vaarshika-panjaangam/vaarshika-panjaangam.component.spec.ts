import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaarshikaPanjaangamComponent } from './vaarshika-panjaangam.component';

describe('VaarshikaPanjaangamComponent', () => {
  let component: VaarshikaPanjaangamComponent;
  let fixture: ComponentFixture<VaarshikaPanjaangamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaarshikaPanjaangamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaarshikaPanjaangamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
