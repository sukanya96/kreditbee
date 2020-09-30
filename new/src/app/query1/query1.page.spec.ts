import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Query1Page } from './query1.page';

describe('Query1Page', () => {
  let component: Query1Page;
  let fixture: ComponentFixture<Query1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Query1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Query1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
