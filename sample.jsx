const Time = new Date();
const currentHour = Time.getHours();
const formattedTimeWithMinutes = Time.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

let greetingMessage = "";
const heading = {
  textAlign: "center",
  verticalAlign: "middle",
};

function between(x, min, max) {
  return x >= min && x < max;
}

greetingMessage = between(currentHour, 5, 12)
  ? "Good Morning"
  : between(currentHour, 12, 17)
    ? "Good Afternoon"
    : between(currentHour, 17, 21)
      ? "Good Evening"
      : between(currentHour, 21, 5)
        ? "Good Night"
        : "Hello";

function App() {
  return (
    <div style={heading}>
      <h1>{greetingMessage}</h1>
      <h2>{formattedTimeWithMinutes}</h2>
    </div>
  );
}
