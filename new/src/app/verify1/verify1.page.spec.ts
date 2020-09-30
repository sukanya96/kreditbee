import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Verify1Page } from './verify1.page';

describe('Verify1Page', () => {
  let component: Verify1Page;
  let fixture: ComponentFixture<Verify1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verify1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Verify1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
