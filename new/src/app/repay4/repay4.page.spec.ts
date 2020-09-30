import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay4Page } from './repay4.page';

describe('Repay4Page', () => {
  let component: Repay4Page;
  let fixture: ComponentFixture<Repay4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
