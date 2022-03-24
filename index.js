
const fs = require("fs");
const { eineFunktion } = require("./functions")

if (!fs.existsSync("./Unterordner")) {
    fs.mkdir("./Unterordner", (err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}

const func = eineFunktion("Hallo")

if (!fs.existsSync("./Unterordner/eineDatei.txt")) {

    fs.writeFile("./Unterordner/eineDatei.txt", func, (err) => {
        if (err) {
            console.log(err);
            return
        }
    })

} else {
    fs.appendFile("./Unterordner/eineDatei.txt", "\n" + func, (err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}

