import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay1Page } from './repay1.page';

describe('Repay1Page', () => {
  let component: Repay1Page;
  let fixture: ComponentFixture<Repay1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
