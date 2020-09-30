import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplnPage } from './appln.page';

describe('ApplnPage', () => {
  let component: ApplnPage;
  let fixture: ComponentFixture<ApplnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
