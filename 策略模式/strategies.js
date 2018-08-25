/*策略对象*/
const strategies = {
        isNonEmpty(value, errorMsg) {
            return value === '' ?
                errorMsg : void 0
        },
        minLength(value, length, errorMsg) {
            return value.length < length ?
                errorMsg : void 0
        },
        isMoblie(value, errorMsg) {
            return !/^1(3|5|7|8|9)[0-9]{9}$/.test(value) ?
                errorMsg : void 0
        },
        isEmail(value, errorMsg) {
            return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) ?
                errorMsg : void 0
        }
}   