import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WritemsgPage } from './writemsg.page';

describe('WritemsgPage', () => {
  let component: WritemsgPage;
  let fixture: ComponentFixture<WritemsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritemsgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WritemsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
