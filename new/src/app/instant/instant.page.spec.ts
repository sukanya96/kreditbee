import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstantPage } from './instant.page';

describe('InstantPage', () => {
  let component: InstantPage;
  let fixture: ComponentFixture<InstantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
