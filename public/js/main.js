let getWeatherReport = async(cityName) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7ad7dcefc93e8d42e89e30a107e6922c&units=metric`;
  try{
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    $('.temp>span').text(data.main.temp);
    $('.location>span').text(data.name);
    $('.country>strong>span').text(data.sys.country);
    $('.mintemp>span').text(data.main.temp_min);
    $('.maxtemp>span').text(data.main.temp_max);
    $('.status>span').text(data.weather[0].description);
  
    let status = data.weather[0].main;
    //console.log(status);
    if (status === "Rain") {
      $("#status").html('<i class="fas fa-cloud-rain"></i>');
    } else if (status === "Clear") {
      $("#status").html('<i class="fas fa-sun"></i>');
    } else if (status === "Haze") {
      $("#status").html('<i class="fas fa-cloud-sun"></i>');
    } else {
      $("#status").html('<i class="fas fa-cloud"></i>');
    } 
  }catch{
    alert('bad request..Unknown city..try again..');
  }   
}
$('#submitBtn').on('click',(e)=>{
    e.preventDefault();
    let cityName = $('#cityName').val();
    if(cityName){
      getWeatherReport(cityName);
    }else{
      alert('Enter a valid city name');
    }
    
})