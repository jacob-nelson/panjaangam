import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaasikaPanjaangamComponent } from './maasika-panjaangam.component';

describe('MaasikaPanjaangamComponent', () => {
  let component: MaasikaPanjaangamComponent;
  let fixture: ComponentFixture<MaasikaPanjaangamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaasikaPanjaangamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaasikaPanjaangamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
