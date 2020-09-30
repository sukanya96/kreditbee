import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Creditlimit1Page } from './creditlimit1.page';

describe('Creditlimit1Page', () => {
  let component: Creditlimit1Page;
  let fixture: ComponentFixture<Creditlimit1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creditlimit1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Creditlimit1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
