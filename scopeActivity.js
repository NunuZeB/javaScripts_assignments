//outer function with two varables
function outer() {
    let a = "Teacher";
    let b = { subject: "Math" }
    console.log(a, b)
//inner function -assign a new value to a, and b
    function inner(a, b) {
        a = "Sub-teacher";
        b.subject = "English";
        console.log(a, b);
    }
    inner(a, b);
    console.log(a, b);
}
outer();