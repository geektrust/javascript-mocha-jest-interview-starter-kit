function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    throw new Error("No command line arguments passed");
  }

  /**
   ***********************************************
   * This is the driver code. Don't change it!!!
   * *********************************************
   *
   * Format of the 'args' array: `<Input 1> <Input 2> <Input 3>`
   * Example: ["Input1 Input2 Input3"]
   *
   * The code evaluator will execute this code by using the command:
   * node . 'Input1 Input2 Input3'
   *
   * So the value of the variable `input` below will be the string: "Input1 Input2 Input3"
   */
  const input = args[0];
  handle(input);
}

/**
 * This method parses each input and assigns it to different variables.
 *
 * The value of the parameter "input" will be of the format - "Input1 Input2 Input3".
 * We split the string and retrieve the input data appropriately.
 *
 * You may need to typecast each input depending on the problem statement.
 */

function handle(input) {
  const inputList = input.trim().split(" ");
  const input1 = inputList[0];
  const input2 = inputList[1];
  const input3 = inputList[2];

  // Start your implementation from here.
  // Example: print the parsed inputs
  console.log("Input1:", input1);
  console.log("Input2:", input2);
  console.log("Input3:", input3);
}

main();
