const process = require('node:process');
const { stderr, stdout, argv } = require('node:process');

function solveQuadrat() {
  const [a, b, c] = argv.slice(-3);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    stderr.write(
      'Должно быть три аргумента! Все аргументы должны быть числами!',
    );
    process.exit(1);
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    stderr.write('Уравнение не имеет корней');
    process.exit(503);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    stdout.write(`Один корень: ${x}`);
    process.exit(0);
  } else if (discriminant > 0) {
    const sqrtDiscriminant = Math.sqrt(discriminant);

    const x1 = (-b + sqrtDiscriminant) / (2 * a);
    let x2 = (-b - sqrtDiscriminant) / (2 * a);

    stdout.write(`Два корня уравнения: ${x1} и ${x2}`);
	process.exit(0);
  }
}

solveQuadrat();
