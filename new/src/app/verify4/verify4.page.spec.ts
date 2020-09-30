import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Verify4Page } from './verify4.page';

describe('Verify4Page', () => {
  let component: Verify4Page;
  let fixture: ComponentFixture<Verify4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verify4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Verify4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
