import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C
    `);
  }

  let apiKey = "5ce2a0772c57a0ba17c711bc946cb320";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <Rings
      height="200"
      width="200"
      color="#4fa94d"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
}
