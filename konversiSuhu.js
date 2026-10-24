const celciusToFahrenheit = require('./rumusSuhu');
const chalk = require('chalk');

const suhuCelcius = 30; // Anda bisa mengubah angka ini
const suhuFahrenheit = celciusToFahrenheit(suhuCelcius);

// Menampilkan hasil menarik di terminal menggunakan chalk
console.log(chalk.bgBlue.white.bold('\n === Program Konversi Suhu === '));
console.log(chalk.green(`Suhu Celcius   : ${suhuCelcius}°C`));
console.log(chalk.yellow(`Suhu Fahrenheit: ${suhuFahrenheit}°F \n`));
