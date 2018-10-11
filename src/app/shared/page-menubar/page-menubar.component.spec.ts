import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenubarComponent } from './page-menubar.component';

describe('PageMenubarComponent', () => {
  let component: PageMenubarComponent;
  let fixture: ComponentFixture<PageMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
