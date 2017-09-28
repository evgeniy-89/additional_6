module.exports = function zeros(expression) {
  expression = expression.split('*');
  let counter2 = 0;
  let counter5 = 0;
  let number;
  let temp;

  for (let i = 0; i < expression.length; ++i) {
    if (expression[i].slice(-2, -1) === '!') {
      number = parseInt(expression[i]);

      for (let j = number; j > 1; j = j - 2) {
        temp = j;
        while (!(temp % 5)) {
          counter5++;
          temp = temp / 5;
        }
        while (!(temp % 2)) {
          counter2++;
          temp = temp / 2;
        }
      }
    } else {
      number = parseInt(expression[i]);

      for (let j = number; j > 1; j = j - 1) {
        temp = j;
        while (!(temp % 5)) {
          counter5++;
          temp = temp / 5;
        }
        while (!(temp % 2)) {
          counter2++;
          temp = temp / 2;
        }
      }
    }
  }
  return Math.min(counter2, counter5);
}
