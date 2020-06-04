import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoomarksPage } from './boomarks.page';

describe('BoomarksPage', () => {
  let component: BoomarksPage;
  let fixture: ComponentFixture<BoomarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomarksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoomarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
