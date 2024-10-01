const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args.map((arg) => {
    return arg.startsWith("--") ? `${arg.slice(2)} is` : `${arg},`;
  });
  const output = result.join(" ");
  console.log(output.slice(0, -1));
};

parseArgs();
