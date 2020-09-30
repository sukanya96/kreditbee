import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan4Page } from './loan4.page';

describe('Loan4Page', () => {
  let component: Loan4Page;
  let fixture: ComponentFixture<Loan4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
