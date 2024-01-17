import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePaneComponent } from './note-pane.component';

describe('NotePaneComponent', () => {
  let component: NotePaneComponent;
  let fixture: ComponentFixture<NotePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotePaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
