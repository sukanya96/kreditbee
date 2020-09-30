import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay7Page } from './repay7.page';

describe('Repay7Page', () => {
  let component: Repay7Page;
  let fixture: ComponentFixture<Repay7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
