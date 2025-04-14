// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
// data.forEach((element) => {
//   console.log(element.day + " " + element.amount);
// });
//
//   });

async function loadData() {
  try {
    const costs = await fetch("data.json").then((response) => response.json());

    const total = costs.reduce((sum, item) => sum + item.amount, 0);
    const avg = total / costs.length;

    const capSize = 2; // no bar can be more then twice the avg
    const maxHeight = 80; // base height

    // Set the height for each element, along with the data-amount attribute
    costs.forEach((element) => {
      const day = document.querySelector(`.item[data-day=${element.day}]`);
      if (!day) {
        console.error("html element not found: " + element.day);
        return;
      }

      const ratio = Math.min(element.amount / avg, capSize);
      const height = ratio * maxHeight;

      day.style.setProperty("--chart-height", height);
      day.setAttribute("data-amount", `$${element.amount}`);
    });

    // Find the largest price and give the item proper style
    const maxItem = costs.reduce((prev, current) => {
      return current.amount > prev.amount ? current : prev;
    });
    const highestDay = document.querySelector(`.item[data-day=${maxItem.day}]`);
    highestDay.classList.add("item-highest");
  } catch (error) {
    console.error("Failed to load data: " + error);
  }
}

loadData();
