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
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.form.addEventListener('input', (e) => this.listenFields(e));      
    }
  
    listenFields(e) {
      const input = e.target;
      if (input.getAttribute('data-js-required')) {        
        this.validateInput(input);
      }     
    }
    
    handleSubmit() { 
      const isValid = this.validateForm();    
      return isValid;
    }  
    
    validateForm() {
      const inputs = this.form.querySelectorAll('input[data-js-required], textarea[data-js-required]');               
      const isValid = [...inputs].some((input) => this.validateInput(input) === false);       
      return isValid;
    }

    
  validateInput(input) {
    const errorMessage = input.closest('.form-group').querySelector('.form-error-message');     
    let isValid = true;

    switch (input.dataset.jsRequired) {
        case 'name': {
            if (input.value === '') {
                errorMessage.innerHTML = 'Поле обязательно для заполнения';
                isValid = false;
            }  else {
                errorMessage.innerHTML = '';
            }            
        } break;
        case 'mail': {
            if (input.value === '') {                
                errorMessage.innerHTML = 'Поле обязательно для заполнения';
                isValid = false;
            } else {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(input.value)) {
                    errorMessage.textContent = 'Неверный формат email';                    
                    isValid = false;
                  } else {
                    errorMessage.innerHTML = '';
                  }                
            }            
        } break;
        case 'message': {
            if (input.value === '') {
                errorMessage.innerHTML = 'Поле обязательно для заполнения';
                isValid = false;
            } else {
                errorMessage.innerHTML = '';
            }                           
        } 
    } 
    
    return isValid;  
    }

    blockStatusButton() {        
      const button = document.querySelector('#submit');     
      button.disabled = true;      
    }

    activeStatusButton() {
      const button = document.querySelector('#submit');     
      button.disabled = false;
    }
}
