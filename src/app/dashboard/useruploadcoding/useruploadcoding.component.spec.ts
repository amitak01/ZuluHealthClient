import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseruploadcodingComponent } from './useruploadcoding.component';

describe('UseruploadcodingComponent', () => {
  let component: UseruploadcodingComponent;
  let fixture: ComponentFixture<UseruploadcodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseruploadcodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseruploadcodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
