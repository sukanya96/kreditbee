import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan3Page } from './loan3.page';

describe('Loan3Page', () => {
  let component: Loan3Page;
  let fixture: ComponentFixture<Loan3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
