(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const birthInfoForm = document.querySelector('#birthInfoForm');
    const birthYearInput = document.querySelector('#birthYearInput');
    const birthMonthInput = document.querySelector('#birthMonthInput');
    const birthDayInput = document.querySelector('#birthDayInput');
    const inputsBirthInfoForm = document.querySelectorAll('input');
    const buttonSubmit = document.querySelector('#buttonSubmit');
    const pictogrammList = document.querySelectorAll('li');
    const pictogramms = document.querySelector('#pictogramms');
    const zodiacSign = document.querySelector('#zodiacSign');
    const spinner = document.querySelector('#spinner');
    const currentYear = new Date().getFullYear();
    let inputsValue = '';
    let sign;

    birthYearInput.setAttribute('max', currentYear)

    function getInputsValues() {
      inputsValue = '';
      inputsBirthInfoForm.forEach(el => {
        inputsValue += el.value;
        return inputsValue;
      });
    }

    function checkInputsValues(value) {
      
    }

    function showElement(elementId) {
      document.querySelector(elementId).style.display = 'inline';
    }

    function createZodiacSignElement() {
      getGoroscopeSign();
      showElement('#zodiacSign');
      zodiacSign.style.display = 'inline';
      zodiacSign.innerHTML = `
      <strong class="h4 m-0">  
        ${sign}
      </strong>
      <span id="zodiacSignDescr" class="text-muted">
        Обитель: ${pictogrammList[4].children[0].id} (${inputsValue[5]%2 == 0 ? 'первый стационарный' : 'ретроградный'}), 
        экзальтация: ${pictogrammList[4].children[0].id !== pictogrammList[6].children[0].id ? pictogrammList[6].children[0].id : pictogrammList[2].children[0].id}
      </span>
      `
    }

    // function summAllMemberOfNumber(number) {
    //   summ = 0;

    //   String(number).split('').forEach(el => {
    //     summ += Number(el);
        
    //     if(String(summ).length > 1) {
    //       summAllMemberOfNumber(summ)
    //     }
    //     return summ
    //   })
    // }

    function showPictogramm(value) {
      const randomizedForPlanets = Math.round(Math.random() * planets.length);
      const randomizedForSigns = Math.round(Math.random() * signs.length);
      
      if(!value) {
        return
      }

      if(value.length%2 === 1) {
        planets.forEach(planet => {
          if(randomizedForPlanets == planet.id) {
            pictogrammList[value.length - 1].innerHTML = planet.svg
          }
        })
      }

      if(value.length%2 === 0) {
        signs.forEach(sign => {
          if(randomizedForSigns == sign.id) {
            pictogrammList[value.length - 1].innerHTML = sign.svg
          }
        })
      }
    }

    function getGoroscopeSign() {
      const  goroscopeSign = [
        {name:'Козерог', month:01, day:20},
        {name:'Водолей', month:02, day:20},
        {name:'Рыбы',    month:03, day:20},
        {name:'Овен',    month:04, day:20},
        {name:'Телец',   month:05, day:20},
        {name:'Близнецы',month:06, day:21},
        {name:'Рак',     month:07, day:22},
        {name:'Лев',     month:08, day:23},
        {name:'Дева',    month:09, day:23},
        {name:'Весы',    month:10,day:23},
        {name:'Скорпион',month:11,day:22},
        {name:'Стрелец', month:12,day:21},
        {name:'Козерог', month:13,day:20}
        ];

      const day = Number(birthDayInput.value);
      const month = Number(birthMonthInput.value);

      if(goroscopeSign[month-1].day <= day) {
        sign = goroscopeSign[month].name;
      }else {
        sign = goroscopeSign[month-1].name;
      }
      return sign
    }

    function renderElementsAfterSubmit() {
      spinner.style.display = 'none';
      showElement('#natalDescr');
      showElement('#howItWorkDecsr');
    }

    birthInfoForm.addEventListener('input', (event) => {
      getInputsValues();
      showPictogramm(inputsValue);

      inputsValue || NaN
        ? pictogramms.style.display = 'inline'
        : pictogramms.style.display = 'none'

      if(birthYearInput.value.length >= 4) {
        birthMonthInput.disabled = false;
        birthMonthInput.focus()
      } else {
        birthMonthInput.disabled = true;
        birthYearInput.focus();
      }

      if(birthMonthInput.value.length >= 2 && birthYearInput.value.length >= 4) {
        birthDayInput.disabled = false;
        birthDayInput.focus();
      } else {
        birthDayInput.disabled = true;
      }

      if(inputsValue.length >= 8) {
        buttonSubmit.disabled = false;
        buttonSubmit.focus();
      } else {
        buttonSubmit.disabled = true;
      }
    });

    birthInfoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      inputsBirthInfoForm.forEach(el => {
        el.disabled = true;
      })
      buttonSubmit.disabled = true;

      document.querySelector('html').style.backgroundImage = 'none';

      createZodiacSignElement();

      spinner.style.display = 'inline';
      setTimeout(renderElementsAfterSubmit, 1700);
    })
  });
})();