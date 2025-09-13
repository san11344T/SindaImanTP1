import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWindowsMicrosoft } from './logo-windows-microsoft';

describe('LogoWindowsMicrosoft', () => {
  let component: LogoWindowsMicrosoft;
  let fixture: ComponentFixture<LogoWindowsMicrosoft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoWindowsMicrosoft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoWindowsMicrosoft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
