document.getElementById("convert").onclick = Convert;
document.getElementById("reset").onclick = reset;

function Convert() {
  var nilaiCelcius = document.getElementById("inputCelcius").value;
  var nilaiFahrenheit = document.getElementById("outputFahrenheit").value;
  var kalkulasi = document.getElementById("isiKalkulasi").value;
  var penjelasan = document.getElementById("isiPenjelasan").value;


  if (nilaiCelcius != "") {
    nilaiFahrenheit = (nilaiCelcius * 1.8) + 32 ;
    kalkulasi = ("Kalkulasinya seperti ini, (" + nilaiCelcius + 
    "°C x 9/5) + 32 = " + (nilaiFahrenheit) + "°F" );
    penjelasan="Jadi rumus yang digunakan dalam mengkonversikan celcius ke fahrenheit adalah : °F = (°C x 9/5) + 32"
  } else {
    nilaiCelcius = (nilaiFahrenheit - 32) / 1.8 ;
    kalkulasi = ("Kalkulasinya seperti ini, (" + nilaiFahrenheit + 
    "°F - 32) x 5/9 =" + (nilaiCelcius) + "°C" );
    penjelasan = "Jadi rumus yang digunakan dalam mengkonversikan fahrenheit ke celcius adalah : °C = (°F - 32) x 5/9"
  }



  document.getElementById("inputCelcius").value = nilaiCelcius;
  document.getElementById("outputFahrenheit").value = nilaiFahrenheit;
  document.getElementById("isiKalkulasi").value = kalkulasi;
  document.getElementById("isiPenjelasan").value = penjelasan;
  

}

function reset() {
  document.getElementById("inputCelcius").value = "";
  document.getElementById("outputFahrenheit").value = "";
  document.getElementById("isiKalkulasi").value = "";
  document.getElementById("isiPenjelasan").value = "";
}
