import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Legal2Page } from './legal2.page';

describe('Legal2Page', () => {
  let component: Legal2Page;
  let fixture: ComponentFixture<Legal2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Legal2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Legal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
