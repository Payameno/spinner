const spinChar = "| / - \\ | / - \\";
let delay = 0;
for (const char of spinChar) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, delay);
  delay += 200;
};