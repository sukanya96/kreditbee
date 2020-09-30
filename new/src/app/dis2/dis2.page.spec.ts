import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dis2Page } from './dis2.page';

describe('Dis2Page', () => {
  let component: Dis2Page;
  let fixture: ComponentFixture<Dis2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dis2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dis2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
