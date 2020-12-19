export class DailyRoutine {
    constructor(
        public id: number,
        public name: string,
        public startDateTime: Date,
        public endDateTime: Date
    ) { }
}
