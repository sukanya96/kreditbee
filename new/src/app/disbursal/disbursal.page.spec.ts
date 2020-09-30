import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisbursalPage } from './disbursal.page';

describe('DisbursalPage', () => {
  let component: DisbursalPage;
  let fixture: ComponentFixture<DisbursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
