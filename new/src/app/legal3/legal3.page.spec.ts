import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Legal3Page } from './legal3.page';

describe('Legal3Page', () => {
  let component: Legal3Page;
  let fixture: ComponentFixture<Legal3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Legal3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Legal3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
