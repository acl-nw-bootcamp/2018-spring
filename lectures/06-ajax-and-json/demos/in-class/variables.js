const fileName = "";

function checkFileName() {
  console.log("Checking file name...");
  if (fileName != "") {
    let url = "http://foo.com";
  } else {
    // fileName = "new-file.txt";
  }
  console.log("Filename: ",fileName);
}

function scopeExample() {
  let topLevel = "hello";
  for (count = 1; count <= 5; count++) {
    const countName = `count-${count}`;
    console.log("Top Level: ",topLevel);
    if (count == 3) {
      let topLevel = "HELLO";
      let bottomLevel = "world";
      console.log(`${topLevel} ${bottomLevel}`);
      console.log("Bottom Level: ",bottomLevel);
    } else {
      let otherLevels = "others";
      console.log(`${topLevel} ${otherLevels}`);
      otherLevels = "none";
    }
  }
}

// console.log(url); // should generate an error.

checkFileName();

// console.log(url); // should generate an error.
