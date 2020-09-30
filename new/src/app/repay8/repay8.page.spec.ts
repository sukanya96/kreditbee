import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay8Page } from './repay8.page';

describe('Repay8Page', () => {
  let component: Repay8Page;
  let fixture: ComponentFixture<Repay8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
