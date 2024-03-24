document.addEventListener("DOMContentLoaded", function() {
  const scheduler = document.querySelector(".schedule");

  // Add a schedule item
  function addScheduleItem(time, description) {
      const scheduleItem = document.createElement("div");
      scheduleItem.classList.add("schedule-item");
      scheduleItem.innerHTML = `<strong>${time}</strong>: ${description}`;
      scheduler.appendChild(scheduleItem);
  }

  // Example schedule items (you can replace this with your own data)
  const scheduleItems = [
      { time: "09:00", description: "Meeting with Client" },
      { time: "12:00", description: "Lunch with Team" },
      { time: "15:00", description: "Submit Report" }
  ];

  // Add example schedule items to the scheduler
  scheduleItems.forEach(item => {
      addScheduleItem(item.time, item.description);
  });
});