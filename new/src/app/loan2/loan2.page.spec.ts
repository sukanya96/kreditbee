import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan2Page } from './loan2.page';

describe('Loan2Page', () => {
  let component: Loan2Page;
  let fixture: ComponentFixture<Loan2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
