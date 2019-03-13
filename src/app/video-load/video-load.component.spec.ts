import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoadPage } from './video-load.page';

describe('VideoLoadPage', () => {
  let component: VideoLoadPage;
  let fixture: ComponentFixture<VideoLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
