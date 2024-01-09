import { Injectable, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BREAKPOINTS_VALUES } from './breakpoints.const';
import { Observable, map } from 'rxjs';
import { BreakpointType } from './breakpoints.type';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  public breakpointObserver$ = inject(BreakpointObserver);

  public getBreakpoint(
    breakpoint: readonly BreakpointType[],
    widthType?: string,
  ): Observable<{ [key: string]: boolean }> {
    const widthTypeValue = widthType ?? 'max-width';

    const breakPointValue = this.mapBreakpoints(
      breakpoint,
      BREAKPOINTS_VALUES,
      widthTypeValue,
    );

    return this.breakpointObserver$.observe(breakPointValue).pipe(
      map((state) => {
        return Object.fromEntries(
          Object.entries(state.breakpoints).map(([_, value], i) => [
            breakpoint[i],
            value,
          ]),
        );
      }),
    );
  }

  private mapBreakpoints(
    breakpoint: readonly BreakpointType[],
    breakpointsValues: typeof BREAKPOINTS_VALUES,
    widthTypeValue?: string,
  ): string[] {
    return breakpoint?.map(
      (bp) =>
        `(${widthTypeValue}: ${
          breakpointsValues[bp as keyof typeof breakpointsValues]
        })`,
    );
  }
}
