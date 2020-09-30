import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Legal1Page } from './legal1.page';

describe('Legal1Page', () => {
  let component: Legal1Page;
  let fixture: ComponentFixture<Legal1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Legal1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Legal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
