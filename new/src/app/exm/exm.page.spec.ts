import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExmPage } from './exm.page';

describe('ExmPage', () => {
  let component: ExmPage;
  let fixture: ComponentFixture<ExmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
