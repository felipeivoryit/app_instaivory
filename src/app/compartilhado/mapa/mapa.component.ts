import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  uluru: Object = { lat: 0, lng: 0 };
  map: Object;
  marker: Object;
  zoom: number;
  lat: any
  lng: any
  endereco: string
  
  @ViewChild('map') mapRef: ElementRef;

  ngAfterViewInit() {
    this.getLocation()
  }

  mapa(){
    //used setTimeout google map is delayed in loading, in stackBlitz

    this.uluru['lat'] = this.lat
    this.uluru['lng'] = this.lng

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 19,
        center: this.uluru
      });
      this.marker = new google.maps.Marker({
        position: this.uluru,
        map: this.map
      });

    }, 2000)

    //console.log(this.map.getZoom())
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.mapa();
          var geocoder = new google.maps.Geocoder;
          this.geocodeLatLng(geocoder)
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geocodeLatLng(geocoder) {
    var latlng = this.uluru
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          this.endereco = results[0].formatted_address
          console.log(this.endereco)
        } else {
          this.endereco = 'Nenhum resultado encontrado'
        }
      } else {
        this.endereco = 'Geocoder falhou devido a: ' + status
      }
    });
  }

}
