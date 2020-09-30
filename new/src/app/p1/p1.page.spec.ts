import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P1Page } from './p1.page';

describe('P1Page', () => {
  let component: P1Page;
  let fixture: ComponentFixture<P1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
