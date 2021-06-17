new Vue({
  el: "#app",
  data: {
    number1: null,
    number2: null,
    number3: null,
    result: null,
    flagNumber1: false,
    flagNumber2: false,
    flagNumber3: false,
  },
  methods: {
    tambah() {
      if (this.flagNumber1 && this.flagNumber2 && !this.flagNumber3 === true) {
        this.result = parseInt(this.number1) + parseInt(this.number2)
      } else if (this.flagNumber1 && this.flagNumber2 || this.number3 === true) {
        this.result = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
      } else if(this.flagNumber1 && this.flagNumber3 && !this.flagNumber2 === true) {
        this.result = parseInt(this.number1) + parseInt(this.number3)
      } else if(this.flagNumber2 && this.flagNumber3 && !this.flagNumber1) {
        this.result = parseInt(this.number2) + parseInt(this.number3)
      } else if (this.flagNumber1 || this.flagNumber2 || this.flagNumber3 === false){
        alert('Jangan lupa di checklist!')
      }
    },
    kurang() {
      if (this.flagNumber1 && this.flagNumber2 && !this.flagNumber3 === true) {
        this.result = parseInt(this.number1) - parseInt(this.number2)
      } else if (this.flagNumber1 && this.flagNumber2 || this.number3 === true) {
        this.result = parseInt(this.number1) - parseInt(this.number2) - parseInt(this.number3);
      } else if(this.flagNumber1 && this.flagNumber3 && !this.flagNumber2 === true) {
        this.result = parseInt(this.number1) - parseInt(this.number3)
      } else if(this.flagNumber2 && this.flagNumber3 && !this.flagNumber1) {
        this.result = parseInt(this.number2) - parseInt(this.number3)
      } else if (this.flagNumber1 || this.flagNumber2 || this.flagNumber3 === false){
        alert('Jangan lupa di checklist!')
      }
    },
    kali() {
      if (this.flagNumber1 && this.flagNumber2 && !this.flagNumber3 === true) {
        this.result = parseInt(this.number1) * parseInt(this.number2)
      } else if (this.flagNumber1 && this.flagNumber2 || this.number3 === true) {
        this.result = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
      } else if(this.flagNumber1 && this.flagNumber3 && !this.flagNumber2 === true) {
        this.result = parseInt(this.number1) * parseInt(this.number3)
      } else if(this.flagNumber2 && this.flagNumber3 && !this.flagNumber1) {
        this.result = parseInt(this.number2) * parseInt(this.number3)
      } else if (this.flagNumber1 || this.flagNumber2 || this.flagNumber3 === false){
        alert('Jangan lupa di checklist!')
      }
    },
    bagi() {
      if (this.flagNumber1 && this.flagNumber2 && !this.flagNumber3 === true) {
        this.result = parseInt(this.number1) / parseInt(this.number2)
      } else if (this.flagNumber1 && this.flagNumber2 || this.number3 === true) {
        this.result = parseInt(this.number1) / parseInt(this.number2) / parseInt(this.number3);
      } else if(this.flagNumber1 && this.flagNumber3 && !this.flagNumber2 === true) {
        this.result = parseInt(this.number1) / parseInt(this.number3)
      } else if(this.flagNumber2 && this.flagNumber3 && !this.flagNumber1) {
        this.result = parseInt(this.number2) / parseInt(this.number3)
      } else if (this.flagNumber1 || this.flagNumber2 || this.flagNumber3 === false){
        alert('Jangan lupa di checklist!')
      }
    },
    reset() {
      window.location.reload()
    }
  },
});
