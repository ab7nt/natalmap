(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const birthInfoForm = document.querySelector('#birthInfoForm');
    const birthYearInput = document.querySelector('#birthYearInput');
    const birthMonthInput = document.querySelector('#birthMonthInput');
    const birthDayInput = document.querySelector('#birthDayInput');
    const inputsBirthInfoForm = document.querySelectorAll('input');
    const alertIsInvalid = document.querySelector('.alert-is-invalid');
    const buttonSubmit = document.querySelector('#buttonSubmit');
    const pictogrammList = document.querySelectorAll('li');
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

    function blockEnteringIfexceedingMaxAllowed(input, maxChars = 2) {
      if(input == birthYearInput) {
        maxChars = 4;
      }
      if(input.value.length >= maxChars) {
        input.value = input.value.substr(0, maxChars)
      }
    }

    function showElement(elementId) {
      document.querySelector(elementId).style.display = 'inline';
    }

    function createZodiacSignElement() {
      getInputsValues();
      getGoroscopeSign();
      showElement('#zodiacSign');
      zodiacSign.style.display = 'inline';
      zodiacSign.innerHTML = `
      <strong class="h4 m-0">  
        ${sign}
      </strong>
      <span id="zodiacSignDescr" class="text-muted text-center">
        Обитель: ${pictogrammList[4].children[0].id} (${inputsValue[5]%2 == 0 ? 'первый стационарный' : 'ретроградный'}), 
        экзальтация: ${pictogrammList[1].children[0].id}
      </span>
      `;
    }

    function showPictogramm(value) {
      const randomizedForPlanets = Math.floor(Math.random() * (planets.length));
      const randomizedForSigns = Math.floor(Math.random() * (signs.length));
      
      if(!value) {
        return;
      }

      if(value.length%2 === 1 && value.length <= planets.length) {
        planets.forEach(planet => {
          if(randomizedForPlanets == planet.id) {
            pictogrammList[value.length - 1].innerHTML = planet.svg;
          }
        });
      }

      if(value.length%2 === 0 && value.length <= signs.length) {
        signs.forEach(sign => {
          if(randomizedForSigns == sign.id) {
            pictogrammList[value.length - 1].innerHTML = sign.svg;
          }
        });
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
      return sign;
    }

    function renderElementsAfterSubmit() {
      spinner.style.display = 'none';
      showElement('#natalDescr');
      showElement('#howItWorkDecsr');

      setTimeout(function() {
        document.querySelector('#forScroll').scrollIntoView({behavior: 'smooth'})
      }, 2)
    }

    birthInfoForm.addEventListener('input', (e) => {
      getInputsValues();
      showPictogramm(inputsValue);
      blockEnteringIfexceedingMaxAllowed(e.target);

      if(birthMonthInput.value > 12) {
        birthMonthInput.value = 12;
      }

      if(birthDayInput.value > 31) {
        birthDayInput.value = 31
      }

      if(birthYearInput.value.length >= 4) {
        birthMonthInput.disabled = false;
        birthMonthInput.focus();
        e.preventDefault();
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
        e.preventDefault();
      } else {
        buttonSubmit.disabled = true;
      }
    });

    birthInfoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      inputsBirthInfoForm.forEach(el => {
        el.disabled = true;
      });
      buttonSubmit.disabled = true;

      setTimeout(function() {
        window.scrollBy({top: 400, behavior: 'smooth'})
      }, 2)

      document.querySelector('#imgTitle').style.display = 'none';

      createZodiacSignElement();

      spinner.style.display = 'inline';
      setTimeout(renderElementsAfterSubmit, 1700);
    });
  });
})();