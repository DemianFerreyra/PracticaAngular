import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetcountryService } from '../services/getcountry.service';

export interface Country{
  name : String;
  min: String;
  max: String;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  public form : any = FormGroup;
  countries : Array<Country> = [];
  constructor(public service : GetcountryService, private formBuilder: FormBuilder) { 
  } 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      country: ['', [Validators.required]]
    })
  }

  getCountry(){
    console.log('hola', this.form.value.country)
    this.service.getCountry(this.form.value.country).subscribe((res: any) =>{
      let pass : boolean = true;
      console.log(res)
      const response : Country = {
        name: res.name,
        min: res.main.temp_min,
        max: res.main.temp_max
      }
      this.countries.forEach(country => {
        if(country.name === res.name){
          pass = false;
        }
      });
      pass === true?this.countries.push(response) : alert('la ciudad ya fue agregada')
    });
  }

  public deleteCountry(item: String){
      console.log('hola', item)
      this.countries = this.countries.filter((e) => e.name !== item)
  }
}