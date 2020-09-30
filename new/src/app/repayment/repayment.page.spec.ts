import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepaymentPage } from './repayment.page';

describe('RepaymentPage', () => {
  let component: RepaymentPage;
  let fixture: ComponentFixture<RepaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
