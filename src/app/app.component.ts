import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  password:string = "";

  constructor(){
    this.password = "";
  }

  onChangeLength(target:any){
    const parsedValue = parseInt(target.value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeCheckbox(element:string){
    if(element=='letters'){
      this.includeLetters = !this.includeLetters;
    }
    else if(element=='numbers'){
      this.includeNumbers = !this.includeNumbers;
    }
    else if(element=='symbols'){
    this.includeSymbols = !this.includeSymbols;
    }
  }

  onButtonClick(){
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = '!@#$%^&*()_';

    let validChars = "";
    if(this.includeLetters){
      validChars+=letters;
    }    
    if(this.includeNumbers){
      validChars+=numbers;
    }    
    if(this.includeSymbols){
      validChars+=symbols;
    }

    let generatedPassword = "";

    for(let i =0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  enableGenerateButton(){
    return !(this.length && (this.includeLetters || this.includeNumbers || this.includeSymbols)) ? true : false;
  }

}
