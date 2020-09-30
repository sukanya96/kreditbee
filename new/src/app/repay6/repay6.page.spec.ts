import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay6Page } from './repay6.page';

describe('Repay6Page', () => {
  let component: Repay6Page;
  let fixture: ComponentFixture<Repay6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
