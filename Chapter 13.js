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

console.log("---");
console.log("3. Chaining an arbitrary number of promises");

const url_3 = "http://localhost:3000/app/usage?app-id=com.apple.Music";

function fetchSequentially_3(urls) {
  const bodies = [];

  function fetchOne(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((body) => {
        bodies.push(body);
      });
  }

  let p = Promise.resolve(undefined);

  for (let url of urls) {
    p = p.then(() => fetchOne(url));
  }

  return p.then(() => bodies);
}

const bodies_3 = fetchSequentially_3([url_3]);

bodies_3.then((bodies) => {
  console.log("3.3.3.3.3.3.3.3.3.3.3.");
  console.log(bodies);
  console.log("3.3.3.3.3.3.3.3.3.3.3.");
});

console.log("---");
console.log("4. Sequentially creating promises");

const url_4 = "http://localhost:3000/app/usage?app-id=com.apple.Music";

function promiseSequence_4(inputs, promiseMaker) {
  inputs = Array.from(inputs);

  function handleNextInput(outputs) {
    if (!inputs.length) {
      return outputs;
    } else {
      let nextInput = inputs.shift();
      return promiseMaker(nextInput)
        .then((output) => outputs.concat(output))
        .then(handleNextInput);
    }
  }

  return Promise.resolve([]).then(handleNextInput);
}

function fetchBody_4(url) {
  return fetch(url).then((r) => r.text());
}

promiseSequence_4([url_4], fetchBody_4)
  .then((body) => {
    console.log("4.4.4.4.4.4.4.4.4.4.");
    console.log(body);
    console.log("4.4.4.4.4.4.4.4.4.4.");
  })
  .catch((e) => console.error(e));
