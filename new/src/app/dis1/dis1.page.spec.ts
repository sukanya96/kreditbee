import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dis1Page } from './dis1.page';

describe('Dis1Page', () => {
  let component: Dis1Page;
  let fixture: ComponentFixture<Dis1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dis1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dis1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
