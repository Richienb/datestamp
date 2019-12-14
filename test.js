import test from "ava"
import datestamp from "."

test("main", (t) => {
    t.deepEqual(datestamp(1576282111), new Date("2019-12-14T00:08:31.000Z"))
})
