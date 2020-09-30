import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DobPage } from './dob.page';

describe('DobPage', () => {
  let component: DobPage;
  let fixture: ComponentFixture<DobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
