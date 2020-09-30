import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dis3Page } from './dis3.page';

describe('Dis3Page', () => {
  let component: Dis3Page;
  let fixture: ComponentFixture<Dis3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dis3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dis3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
