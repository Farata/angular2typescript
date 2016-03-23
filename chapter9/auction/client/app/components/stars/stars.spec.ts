import {
  it,
  inject,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder,
} from 'angular2/testing';

// Component to test
import StarsComponent from './stars';

describe('StarsComponent', () => {
  let component;
  let testComponentBuilder;

  beforeEachProviders(() => [
    StarsComponent,
    TestComponentBuilder
  ]);

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

  it('all stars are empty', done => {
    testComponentBuilder.createAsync(StarsComponent).then(fixture => {
      let element = fixture.nativeElement;
      let cmp = fixture.componentInstance;
      cmp.rating = 0;

      fixture.detectChanges();

      let selector = '.glyphicon-star-empty';
      expect(element.querySelectorAll(selector).length).toBe(5);
      done();
    });
  });

  it('all stars are filled', done => {
    testComponentBuilder.createAsync(StarsComponent).then(fixture => {
      let element = fixture.nativeElement;
      let cmp = fixture.componentInstance;
      cmp.rating = 5;

      fixture.detectChanges();

      let selector = '.glyphicon-star:not(.glyphicon-star-empty)';
      expect(element.querySelectorAll(selector).length).toBe(5);
      done();
    });
  });

  it('emits rating change event when readonly is false', done => {
    component.ratingChange.subscribe(r => {
      expect(r).toBe(3);
      done();
    });
    component.readonly = false;
    component.fillStarsWithColor(2);
  });
});
