import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Verify3Page } from './verify3.page';

describe('Verify3Page', () => {
  let component: Verify3Page;
  let fixture: ComponentFixture<Verify3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Verify3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Verify3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
