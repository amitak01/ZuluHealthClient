import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscasesComponent } from './userscases.component';

describe('UserscasesComponent', () => {
  let component: UserscasesComponent;
  let fixture: ComponentFixture<UserscasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
