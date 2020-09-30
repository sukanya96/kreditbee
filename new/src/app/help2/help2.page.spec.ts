import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Help2Page } from './help2.page';

describe('Help2Page', () => {
  let component: Help2Page;
  let fixture: ComponentFixture<Help2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Help2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Help2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
