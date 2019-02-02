const joinPeriod = new Map<string, string>();
joinPeriod.set("春", "1");
joinPeriod.set("夏", "2");
joinPeriod.set("秋", "3");

export default function processJoinTime(user: any): number {
    try {
        const attrArray: any[] = user.extattr.attrs;
        let result: string = new Date().getFullYear().toString() + "0";
        attrArray.some(item => {
            const testResult = /加入时间/g.test(item.name);
            if (testResult) {
                let year = Number.parseInt(item.value.substr(0, 4));
                let period = joinPeriod.get(item.value.substr(4, 1));
                if (!period) {
                    period = "0";
                }
                if (!Object.is(year, NaN) && period) {
                    result = year + period;
                }
            }
            return testResult;
        });

        return +result;
    } catch (e) {
        console.log(e.message);
        return new Date().getFullYear() * 10;
    }
}
