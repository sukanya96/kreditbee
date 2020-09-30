import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan5Page } from './loan5.page';

describe('Loan5Page', () => {
  let component: Loan5Page;
  let fixture: ComponentFixture<Loan5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
