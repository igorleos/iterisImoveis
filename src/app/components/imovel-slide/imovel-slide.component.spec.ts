import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelSlideComponent } from './imovel-slide.component';

describe('ImovelSlideComponent', () => {
  let component: ImovelSlideComponent;
  let fixture: ComponentFixture<ImovelSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
