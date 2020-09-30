import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay9Page } from './repay9.page';

describe('Repay9Page', () => {
  let component: Repay9Page;
  let fixture: ComponentFixture<Repay9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
