import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PincodePage } from './pincode.page';

describe('PincodePage', () => {
  let component: PincodePage;
  let fixture: ComponentFixture<PincodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PincodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
