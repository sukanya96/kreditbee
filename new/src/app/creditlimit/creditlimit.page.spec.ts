import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditlimitPage } from './creditlimit.page';

describe('CreditlimitPage', () => {
  let component: CreditlimitPage;
  let fixture: ComponentFixture<CreditlimitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditlimitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditlimitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
