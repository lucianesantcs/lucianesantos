import { TestBed } from '@angular/core/testing';

import { BreakpointsService } from './breakpoints.service';
import { BREAKPOINTS_VALUES } from './breakpoints.enum';

const breakpoint = ['xs', 'md', 'xl'];
const widthTypeValue = 'max-width';

describe('BreakpointsService', () => {
  let bpService: BreakpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    bpService = TestBed.inject(BreakpointsService);
  });

  it('should be created', () => {
    expect(bpService).toBeTruthy();
  });

  it('should map breakpoint values to their corresponding media query strings', () => {
    const expectedValues = [
      '(max-width: 0px)',
      '(max-width: 768px)',
      '(max-width: 1280px)',
    ];

    const mappedValues = bpService['mapBreakpoints'](
      breakpoint,
      BREAKPOINTS_VALUES,
      widthTypeValue,
    );

    expect(mappedValues).toEqual(expectedValues);
  });

  // it('should return an array of key and value corresponding the breakpoint values', (done) => {
  //   const expectedResult = {
  //     xs: false,
  //     md: false,
  //     xl: false,
  //   };

  //   bpService.getBreakpoint(breakpoint).subscribe((result) => {
  //     expect(result).toEqual(expectedResult);
  //     done();
  //   });
  // });
});
