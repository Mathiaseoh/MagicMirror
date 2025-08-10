
let config = {
  address: "0.0.0.0",
  port: 8080,
  ipWhitelist: [],
  language: "sv",
  timeFormat: 24,
  units: "metric",
  modules: [
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      position: "top_left",
      config: {
        calendars: [
          {
            url: "https://calendar.google.com/calendar/ical/[DIN_KALENDERLÄNK]/basic.ics",
            symbol: "calendar"
          }
        ]
      }
    },
    {
      module: "weather",
      position: "top_right",
      config: {
        weatherProvider: "openweathermap",
        type: "current",
        location: "Stockholm,SE",
        apiKey: "[DIN_OPENWEATHER_APIKEY]"
      }
    }
  ]
};
module.exports = config;
