import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dis4Page } from './dis4.page';

describe('Dis4Page', () => {
  let component: Dis4Page;
  let fixture: ComponentFixture<Dis4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dis4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dis4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
