import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan1Page } from './loan1.page';

describe('Loan1Page', () => {
  let component: Loan1Page;
  let fixture: ComponentFixture<Loan1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
