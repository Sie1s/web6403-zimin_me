class TourRequest {
  constructor(city, country, date, nights, tourists, agreement) {
    this.city = city;
    this.country = country;
    this.date = date;
    this.nights = nights;
    this.tourists = tourists;
    this.agreement = agreement;
  }

  printToConsole() {
    console.log("========================================");
    console.log("Заявка на поиск тура");
    console.log("========================================");
    console.log(`Город вылета:     ${this.city}`);
    console.log(`Страна:           ${this.country}`);
    console.log(`Дата прибытия:    ${this.date}`);
    console.log(`Количество ночей: ${this.nights}`);
    console.log(`Количество гостей:${this.tourists}`);
    console.log("========================================");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector('input[name="arriving-date"]');
  
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const formattedToday = `${yyyy}-${mm}-${dd}`;

  dateInput.setAttribute('min', formattedToday);

  const form = document.getElementById("booking-form");

  form.addEventListener("submit", function (event) {
    // Отменяем перезагрузку страницы
    event.preventDefault();

    const formData = new FormData(form);
    const request = new TourRequest(
      formData.get("departure-city"),
      formData.get("country"),
      formData.get("arriving-date"),
      formData.get("nights-count"),
      formData.get("tourists-count"),
    );

    request.printToConsole();
  });
});