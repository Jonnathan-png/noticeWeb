import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillsPageComponent } from './detaills-page.component';

describe('DetaillsPageComponent', () => {
  let component: DetaillsPageComponent;
  let fixture: ComponentFixture<DetaillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
