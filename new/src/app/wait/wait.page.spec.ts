import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitPage } from './wait.page';

describe('WaitPage', () => {
  let component: WaitPage;
  let fixture: ComponentFixture<WaitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
