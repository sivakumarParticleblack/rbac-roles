import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1yb2xlcy9zcmMvbGliL3BpY3MtcmJhYy1yb2xlcy9AY29yZS9kaXJlY3RpdmVzL3Blcm1pc3Npb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3ZGLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFDbUIsUUFBbUIsRUFDNUIsVUFBc0IsRUFDdEIsU0FBMEI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBRXBDLENBQUM7SUFDRCxlQUFlO1FBQ2IsTUFBTSxXQUFXLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO29CQUM1QixJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3BFO2lCQUNGO3FCQUFNLElBQ0wsUUFBUSxDQUFDLE9BQU8sS0FBSyxlQUFlO29CQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVk7b0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWTtvQkFDakMsUUFBUSxDQUFDLE9BQU8sS0FBSyxjQUFjO29CQUNuQyxRQUFRLENBQUMsT0FBTyxLQUFLLGVBQWU7b0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUNqQztvQkFDQSxJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUM7d0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRTtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUNwRSwyREFBMkQsQ0FDNUQsQ0FBQztvQkFDRixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2lIQWpEVSxtQkFBbUI7cUdBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjt1SkFFVSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZmllbGRLZXldJ1xufSlcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkS2V5ITogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGF0YVN0b3JlOiBQZXJtaXNzaW9uU3RvcmVcbiAgKSB7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gIHRoaXMuZGF0YVN0b3JlLnN0YXRlO1xuICAgICBpZiAocGVybWlzc2lvbnMpIHtcbiAgICAgIGlmICghcGVybWlzc2lvbnNbdGhpcy5maWVsZEtleV0pIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKHRlbXBsYXRlLnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgICAgICAgICAgci5ocmVmID0gJ2phdmFzY3JpcHQ6dm9pZCgwKTsnO1xuICAgICAgICAgICAgclsnZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsIHRlbXBsYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtTVVMVElTRUxFQ1QnIHx8XG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtRFJPUERPV04nIHx8XG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtQ0hFQ0tCT1gnIHx8XG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtVFJFRVNFTEVDVCcgfHxcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1SQURJT0JVVFRPTicgfHxcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1DQUxFTkRBUidcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgci5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHIuY2xhc3NOYW1lICs9ICcgcC1kaXNhYmxlZCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgY29uc3QgY2hpbGRJbnB1dE5vZGVzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhLCBuZy1zZWxlY3QsIGRpdiwgbGFibGUnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjaGlsZElucHV0Tm9kZXMuZm9yRWFjaCgoZWxlbTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=