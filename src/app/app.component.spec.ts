import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By, Title } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { AppComponent } from './app.component';

describe('AppComponent:', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: Title, useValue: { getTitle: () => "Test App"} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Test App');
  });

  it('should render title in a h2 tag', () => {
    spyOn(component, "logOut").and.callThrough();
    const logoutButton: DebugElement = fixture.debugElement.query(By.css('button'));
    logoutButton.triggerEventHandler("click", {});
    expect(component.logOut).toHaveBeenCalled();
  });
});
