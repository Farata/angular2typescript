import { TestBed, async, fakeAsync, inject } from '@angular/core/testing';
import StarsComponent from './stars';

describe('StarsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('is successfully injected', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component instanceof StarsComponent).toEqual(true);
  });

  it('readonly property is true by default', () => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    expect(component.readonly).toEqual(true);
  });

  it('all stars are empty', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let element = fixture.nativeElement;
    let cmp = fixture.componentInstance;
    cmp.rating = 0;

    fixture.detectChanges();

    let selector = '.glyphicon-star-empty';
    expect(element.querySelectorAll(selector).length).toBe(5);
  });

  it('all stars are filled', () => {
    let fixture = TestBed.createComponent(StarsComponent);
    let element = fixture.nativeElement;
    let cmp = fixture.componentInstance;
    cmp.rating = 5;

    fixture.detectChanges();

    let selector = '.glyphicon-star:not(.glyphicon-star-empty)';
    expect(element.querySelectorAll(selector).length).toBe(5);
  });

  it('emits rating change event when readonly is false', async(() => {
    let component = TestBed.createComponent(StarsComponent).componentInstance;
    component.ratingChange.subscribe(r => {
      expect(r).toBe(3);
    });
    component.readonly = false;
    component.fillStarsWithColor(2);
  }));
});
