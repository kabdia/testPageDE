export class FormValidator {
    
    static instance = null;
  
    constructor() {
      if (FormValidator.instance) {
        return FormValidator.instance; 
      }
  
      this.form = null;
      this.init('#modalWindow');
      FormValidator.instance = this; 
    }
  
    static getInstance() {
      if (!FormValidator.instance) {
        FormValidator.instance = new FormValidator();
      }
      return FormValidator.instance;
    }
  
    init(formSelector) {
        
      this.form = document.querySelector(formSelector);        
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));//эта функция будет в обработчике в другом файле
      this.addEventListenersToFields();
    }
  
    addEventListenersToFields() {
       
      const inputs = this.form.querySelectorAll('input[data-js-required], textarea[data-js-required]');
       
      inputs.forEach((input) => {
        const modes = input.getAttribute('data-js-required-mode')?.split(',') || [];
        modes.forEach((mode) => {
          if (mode === 'blur') {
            input.addEventListener('blur', () => this.validateInput(input));
          }
          if (mode === 'change') {
            input.addEventListener('change', () => this.validateInput(input));
          }
        });
      });
    }
    
    handleSubmit(e) {
       
  
      const isValid = this.validateForm();  
      return isValid;
    }  
    
    validateForm() {
      const inputs = this.form.querySelectorAll('input[data-js-required], textarea[data-js-required]');
      let isValid = true;
  
      inputs.forEach((input) => {
        if (!this.validateInput(input)) {
          isValid = false;
        }
      });
      console.log(isValid)
      return isValid;
    }

    
  validateInput(input) {
    const errorMessage = input.closest('.form-group').querySelector('.form-error-message');     
    let isValid = true;

    switch (input.dataset.jsRequired) {
        case 'name': {
            if (input.value === '') {
                errorMessage.innerHTML = 'This field is required.'
                isValid = false;
            }  else {
                errorMessage.innerHTML = '';
            }            
        } break;
        case 'mail': {
            if (input.value === '') {                
                errorMessage.innerHTML = 'This field is required.';
                isValid = false;
            } else {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                if (!emailRegex.test(input.value)) {
                    errorMessage.textContent = 'Неверный формат email.';                    
                    isValid = false;
                  } else {
                    errorMessage.innerHTML = '';
                  }                
            }            
        } break;
        case 'message': {
            if (input.value === '') {
                errorMessage.innerHTML = 'This field is required.';
                isValid = false;
            } else {
                errorMessage.innerHTML = '';
            }                           
        } 
    } 
    return isValid;  
    }
}
