import { TestBed } from '@angular/core/testing';

import { InterceptorPaginationInterceptor } from './interceptor-pagination.interceptor';

describe('InterceptorPaginationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorPaginationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorPaginationInterceptor = TestBed.inject(InterceptorPaginationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
