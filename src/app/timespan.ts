export class TimeSpan{
    private static millisecondsInOneSecond = 1000;
    private static millisecondsInOneMinute = 60000;
    private static millisecondsInOneHour = 3.6e+6;
    private static millisecondsInOneDay = 8.64e+7;
    private static millisecondsInOneWeek = 6.048e+8;
    private static millisecondsInOneYear = 3.154e+10;

    constructor(public value: number){}

    public static fromSeconds(seconds: number): TimeSpan{
        return new TimeSpan((seconds * this.millisecondsInOneSecond));
    }

    public static fromMinutes(minutes: number): TimeSpan{
        return new TimeSpan((minutes * this.millisecondsInOneMinute));
    }

    public static fromHours(hours: number): TimeSpan{
        return new TimeSpan((hours * this.millisecondsInOneHour));
    }

    public static fromDays(days: number): TimeSpan{
        return new TimeSpan((days * this.millisecondsInOneDay));
    }

    public static fromWeeks(weeks: number): TimeSpan{
        return new TimeSpan((weeks * this.millisecondsInOneWeek));
    }

    public static fromYears(years: number): TimeSpan{
        return new TimeSpan((years * this.millisecondsInOneYear));
    }

    /**
     * @description Converts a timespan to a date by taking the current time + timespan
     * @param timespan Timespan
     */
    public toDateAddTimespan(): Date{
        return new Date(TimeSpan.now() + this.value);
    }

    /**
     * @description Converts a timespan to a date by taking the current time - timespan
     * @param timespan Timespan
     */
    public toDateSubtractTimespan(): Date{
        return new Date(TimeSpan.now() - this.value);
    }

    private static now(): number{
        return new Date().getTime();
    }
}