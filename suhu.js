// function celcius() {
//   // Dapatkan nilai suhu dari input
//   let suhu = document.form.layar.value;

//   // Konversi suhu ke Celsius
//   let celcius = suhu;

//   // Konversi suhu ke Kelvin
//   let kelvin = eval(celcius + 273.15);

//   // Tampilkan hasil konversi di layarC dan layarK
//   document.querySelector('input[name="layarC"]').value = celcius + "°C";
//   document.querySelector('input[name="layarK"]').value = kelvin + "°K";
// }

function celcius() {
  let temperature = parseFloat(document.getElementById("inputTemperature").value);
  document.form.layarC.value = temperature;
  document.form.layarF.value = (temperature * 9) / 5 + 32;
  document.form.layarK.value = temperature + 273.15;
}

function fahrenheit() {
  let temperature = parseFloat(document.getElementById("inputTemperature").value);
  document.form.layarC.value = ((temperature - 32) * 5) / 9;
  document.form.layarF.value = temperature;
  document.form.layarK.value = ((temperature - 32) * 5) / 9 + 273.15;
}

function kelvin() {
  let temperature = parseFloat(document.getElementById("inputTemperature").value);
  document.form.layarC.value = temperature - 273.15;
  document.form.layarF.value = ((temperature - 273.15) * 9) / 5 + 32;
  document.form.layarK.value = temperature;
}

function clean() {
  document.form.layarC.value = "";
  document.form.layarF.value = "";
  document.form.layarK.value = "";
  document.getElementById("inputTemperature").value = "";
}
