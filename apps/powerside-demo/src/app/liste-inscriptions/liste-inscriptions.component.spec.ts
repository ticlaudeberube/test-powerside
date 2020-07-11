import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscriptionsComponent } from './liste-inscriptions.component';

describe('ListeInscriptionsComponent', () => {
  let component: ListeInscriptionsComponent;
  let fixture: ComponentFixture<ListeInscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
