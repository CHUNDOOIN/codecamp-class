export {};

// /apple/.test("apple")
// true
// /apple/.test("applq")
// false
// /\w@a.com/.test("2@a.com")
// true
// /^\w@a.com$/.test("asdasdasd@a.com")
// false
// /^\w+@a.com$/.test("asdasdasd@a.com")
// true
// /^\w+@\w+.com$/.test("123@123.com")
// true
// /^\w+@\w+.\w+$/.test("123@123.com")
// true
// /^\w+@\w+\.\w+$/.test("123@123123123.com")
// true
// /010-1234-5678/.test("010-1234-5678")
// true
// /^\d{3}-1234-5678$/.test("0ㅋ10-1234-5678")
// false
// /^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678")
// true
// [a-zA-z]
// \s 스페이스바
