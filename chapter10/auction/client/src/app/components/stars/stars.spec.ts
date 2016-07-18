import {addProviders, fakeAsync, inject} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

// Component to test
import StarsComponent from './stars';

describe('StarsComponent', () => {
  let component;
  let testComponentBuilder;

  beforeEach(() => addProviders([
    StarsComponent,
    TestComponentBuilder
  ]));

  beforeEach(inject([
    StarsComponent,
    TestComponentBuilder
  ], (_cmp, _tcb) => {
    component = _cmp;
    testComponentBuilder = _tcb;
  }));

  it('is successfully injected', () => {
    expect(component instanceof StarsComponent).toEqual(true);
  });

  it('readonly property is true by default', () => {
    expect(component.readonly).toEqual(true);
  });

  it('all stars are empty', fakeAsync(() => {
    let fixture = testComponentBuilder.createFakeAsync(StarsComponent);
    let element = fixture.nativeElement;
    let cmp = fixture.componentInstance;
    cmp.rating = 0;

    fixture.detectChanges();

    let selector = '.glyphicon-star-empty';
    expect(element.querySelectorAll(selector).length).toBe(5);
  }));

  it('all stars are filled', fakeAsync(() => {
      let fixture = testComponentBuilder.createFakeAsync(StarsComponent);
      let element = fixture.nativeElement;
      let cmp = fixture.componentInstance;
      cmp.rating = 5;

      fixture.detectChanges();

      let selector = '.glyphicon-star:not(.glyphicon-star-empty)';
      expect(element.querySelectorAll(selector).length).toBe(5);
  }));

  it('emits rating change event when readonly is false', fakeAsync(() => {
    component.ratingChange.subscribe(r => {
      expect(r).toBe(3);
    });
    component.readonly = false;
    component.fillStarsWithColor(2);
  }));
});