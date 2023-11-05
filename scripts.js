const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 4.90;
const euro = 5.26;

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(inputReais);

if (select.value === "$ Dolar Americano") {
  currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputReais / dolar);
}

if (select.value === "€ Euro") {
  currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputReais / euro)
}
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === "$ Dolar Americano") {
    currencyName.innerHTML = "Dolar Americano"
    currencyImg.src = "./assets/estados-unidos (1) 1.png"
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }
  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
