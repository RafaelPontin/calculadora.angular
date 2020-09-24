import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numDigitado: string = '';
  formula: string = '';
  num1:string = '';
  num2:string = '';
  operacao: string = '';

  constructor() { }

  ngOnInit() {
  }

  digitaValor(valor: number){
    this.numDigitado += valor;
  }

  somar(){
    this.operacao = '+';
    this.calculaFormula();
    this.formula = this.num1 + ' + ';
  }

  subtrair(){
    this.operacao = '-';
    this.calculaFormula();
    this.formula = this.num1 + ' - ';
  }

  multiplicar(){
    this.operacao = '*';
    this.calculaFormula();
    this.formula = this.num1 + ' * ';
  }

  dividir(){
    this.operacao = '/';
    this.calculaFormula();
    this.formula = this.num1 + ' + ';
  }

  calculaFormula(){
    this.num1 = this.numDigitado;
    this.numDigitado = '';
  }

  calcular(){
    if(this.numDigitado != '' && this.num1){
        let total: number = 0;
        let numero1:number = + this.num1;
        let numero2: number = + this.numDigitado;
        total = this.calculaOperacao(numero1, numero2);
        console.log(total);
        this.num2 = this.numDigitado;
        this.formula = `${this.num1} ${this.operacao} ${this.num2} = ${total}`;
        this.limparCampos();
    }
    else{
      console.log('Numeros invalidos');
    }
  }

  calculaOperacao(numero1: number, numero2: number) : number
  {
      let valorTotal:number = 0;
      switch(this.operacao){
        case '+': 
          valorTotal = numero1 + numero2;
        break;
        case '-':
          valorTotal = numero1 - numero2;
        break;
        case '*':
          valorTotal = numero1 * numero2;
        break;
        case '/':
          valorTotal = numero1 / numero2;
        break;
      }
      return valorTotal;
  }

  limparCampos(){
    this.numDigitado = '';
    this.num1 = '';
    this.num2 = '';
    this.operacao = '';
  }

  clear(){
    this.limparCampos();
    this.formula = '';
  }

  clearEntity(){
    this.numDigitado = '';
  }

  addVirgula(){
    this.numDigitado += '.';
  }

  backspace(){
    if(this.numDigitado.length > 0)
      this.numDigitado = this.numDigitado.substring(0, (this.numDigitado.length -1))
  }

}
