import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Creditlimit3Page } from './creditlimit3.page';

describe('Creditlimit3Page', () => {
  let component: Creditlimit3Page;
  let fixture: ComponentFixture<Creditlimit3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creditlimit3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Creditlimit3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
