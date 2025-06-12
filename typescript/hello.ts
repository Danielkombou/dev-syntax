function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and"));
    } else {
        console.log("welcome lone traverler " + x);
    }
}