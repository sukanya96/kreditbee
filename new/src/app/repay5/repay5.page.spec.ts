import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay5Page } from './repay5.page';

describe('Repay5Page', () => {
  let component: Repay5Page;
  let fixture: ComponentFixture<Repay5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
