import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlexiPage } from './flexi.page';

describe('FlexiPage', () => {
  let component: FlexiPage;
  let fixture: ComponentFixture<FlexiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlexiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
