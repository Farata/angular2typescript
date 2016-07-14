import {it, expect, describe} from '@angular/core/testing';
import ApplicationComponent from './application';

describe('ApplicationComponent', () => {
  it('is successfully instantiated', () => {
    const app = new ApplicationComponent();
    expect(app instanceof ApplicationComponent).toEqual(true);
  });
});
