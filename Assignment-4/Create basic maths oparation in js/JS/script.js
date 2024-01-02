function calculate() {
      const num1 = parseFloat(document.getElementById("firnumber").value);
      const num2 = parseFloat(document.getElementById("secnumber").value);
      const btn = document.getElementById("btn").value;
      let result;

      switch (btn) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case "%":
          result = num1 % num2;
        default:
          result = "Invalid operation";
      }

      document.getElementById("result").innerText = "Result : " + result;
}
