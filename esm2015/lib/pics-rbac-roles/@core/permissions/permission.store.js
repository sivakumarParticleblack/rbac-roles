import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '../service/store.service';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXJvbGVzL3NyYy9saWIvcGljcy1yYmFjLXJvbGVzL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsS0FBVTtJQUM3QztRQUNFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxRQUFRLGlDQUFNLElBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxFQUFHLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWUsR0FBRztRQUN6QixJQUFJLElBQUksS0FBSyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLElBQUksQ0FBQyxLQUFZO1FBQ3ZCLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFHLEtBQUssRUFBQztZQUNQLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQy9CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDekM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7NkdBM0JVLGVBQWU7aUhBQWYsZUFBZTs0RkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25TdG9yZSBleHRlbmRzIFN0b3JlPGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7fSk7XG4gIH1cblxuICBzZXRTdG9yZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZihkYXRhKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5kYXRhIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0b3JlKHR5cGU6IHN0cmluZyA9ICdQJyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKHR5cGUgPT09ICdQJykgcmV0dXJuIG9mKHRoaXMuc3RhdGUpO1xuICAgIGVsc2UgcmV0dXJuIG9mKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmbGF0KGFycmF5OiBhbnlbXSkge1xuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgaWYoYXJyYXkpe1xuICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgIGlmIChpdGVtICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuZmxhdChpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=