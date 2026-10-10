console.log("---");
console.log("1. Creating Promises");

function wait_1(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented."));
    } else {
      setTimeout(resolve, duration);
    }
  });
}

const rejected_promise_1 = wait_1(-10);

rejected_promise_1
  .then(() => {
    console.log("You shouldn't be able to read this.");
  })
  .catch((error) => {
    console.log(error);
  });

const resolved_promise_1 = wait_1(3000);

resolved_promise_1.then((value) => {
  console.log(value);
});
console.log("This prints before the resolved value.");

console.log("---");
console.log("2. A function to read JSONs from a web source");

const http = require("http");

function getJSON_2(url) {
  return new Promise((resolve, reject) => {
    const request = http.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}.`));
      } else if (
        response.headers["content-type"] !== "application/json; charset=utf-8"
      ) {
        reject(new Error("Invalid content-type."));
      } else {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          try {
            let parsed = JSON.parse(body);
            resolve(parsed);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    request.on("error", (error) => {
      reject(error);
    });
  });
}

const url_2 = "http://localhost:3000/app/usage?app-id=com.apple.Music";

const json_2 = getJSON_2(url_2);

json_2.then((value) => {
  console.log(value);
});
