import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fetchAllJobsResolver } from './fetch-all-jobs.resolver';

describe('fetchAllJobsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fetchAllJobsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
