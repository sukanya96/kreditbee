import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loan6Page } from './loan6.page';

describe('Loan6Page', () => {
  let component: Loan6Page;
  let fixture: ComponentFixture<Loan6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loan6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loan6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
