import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Creditlimit2Page } from './creditlimit2.page';

describe('Creditlimit2Page', () => {
  let component: Creditlimit2Page;
  let fixture: ComponentFixture<Creditlimit2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creditlimit2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Creditlimit2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
