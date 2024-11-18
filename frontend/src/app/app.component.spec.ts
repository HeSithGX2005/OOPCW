import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';  // Import NavbarComponent
import { RouterModule } from '@angular/router';  // If routing is used

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent],  // Declare NavbarComponent here
      imports: [RouterModule]  // Import RouterModule if using routing
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the "frontend" title', () => {
    expect(component.title).toEqual('frontend');
  });
});
