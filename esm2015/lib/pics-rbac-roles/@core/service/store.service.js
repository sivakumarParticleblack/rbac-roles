import { BehaviorSubject } from 'rxjs';
export class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXJvbGVzL3NyYy9saWIvcGljcy1yYmFjLXJvbGVzL0Bjb3JlL3NlcnZpY2Uvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE1BQU0sT0FBTyxLQUFLO0lBSWhCLFlBQXNCLFlBQWU7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZTxUPiB7XG4gIHN0YXRlJDogT2JzZXJ2YWJsZTxUPjtcbiAgcHJpdmF0ZSBfc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8VD47XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZTogVCkge1xuICAgIHRoaXMuX3N0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFN0YXRlKTtcbiAgICB0aGlzLnN0YXRlJCA9IHRoaXMuX3N0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUkLmdldFZhbHVlKCk7XG4gIH1cblxuICBzZXRTdGF0ZShuZXh0U3RhdGU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZSQubmV4dChuZXh0U3RhdGUpO1xuICB9XG59XG4iXX0=