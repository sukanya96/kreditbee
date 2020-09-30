import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Verify2Page } from './verify2.page';

describe('Verify2Page', () => {
  let component: Verify2Page;
  let fixture: ComponentFixture<Verify2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verify2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Verify2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
