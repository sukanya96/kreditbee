import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Repay3Page } from './repay3.page';

describe('Repay3Page', () => {
  let component: Repay3Page;
  let fixture: ComponentFixture<Repay3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Repay3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Repay3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
