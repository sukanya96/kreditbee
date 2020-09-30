import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay2Page } from './repay2.page';

describe('Repay2Page', () => {
  let component: Repay2Page;
  let fixture: ComponentFixture<Repay2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
