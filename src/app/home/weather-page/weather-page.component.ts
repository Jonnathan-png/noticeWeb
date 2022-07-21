import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  weatherData?:[];
  name?: string;
  main?:{
    temp: '',
    feels_like: '',
    temp_min: '',
    temp_max: '',
    pressure: '',
    humidity: ''
  };


  constructor(
    private readonly _climaService: ClimaService) { }

  ngOnInit(): void {
    this.getClima();
    console.log("Init WeatherComponent");
  }

  getClima() {
    this._climaService.getClima().subscribe(
        res => {
          this.weatherData= res.weather;
          this.name = res.name;
          this.main = res.main;
          console.log(this.main);
          console.log("Metodo clima")
        });
  }

}
