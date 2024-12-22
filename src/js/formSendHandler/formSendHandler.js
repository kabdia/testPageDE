import { FormValidator } from "../formValidator/formValidator";
import { ModalManager } from "../modalManager/modalManager";

export class FormSendHandler {
    static instance;

    attrs = {
      form: "data-js-form",
    };
  
    constructor() {
      if (FormSendHandler.instance) {        
        return FormSendHandler.instance;
      }
      this.#bindEvents();
      FormSendHandler.instance = this;
    }
  
    static getInstance() {
      if (!FormSendHandler.instance) {
        FormSendHandler.instance = new FormHandler();
      }
      return FormSendHandler.instance;
    }
  
    #handleSubmit(e) {
      const { target, submitter } = e;
      if (!target.hasAttribute(`${this.attrs.form}`)) return;
      if (!target.tagName.toLowerCase() === "form") return;
      const cfg = JSON.parse(target.getAttribute(this.attrs.form));
      const {
        url,
        method = "POST",
        showModalAfterSuccess,
        preventDefault = true,        
        isNeedValidateBeforeSend,
        showModalAfterError
      } = cfg;
      const data = new FormData(target);
      if (preventDefault) {
        e.preventDefault();
      }
      submitter.disabled = true;
      
      if (isNeedValidateBeforeSend) {        
        const resValidate = FormValidator.getInstance().validateForm(target);
        if (!resValidate) {            
            if (showModalAfterError) {
                ModalManager.open({
                mode: 'sucessBlock', 
                datas: '#messageSuccess', 
                text: 'There was an error sending your message.',
                });
            }
            return;
                      
        }
      }
     
      fetch(url, {
        method,
        body: data,
      })
      .then((res) => {
        // Если ответ успешный, показываем модальное окно успеха
        if (showModalAfterSuccess) {
          ModalManager.open({ 
            mode: 'sucessBlock', 
            datas: '#messageSuccess', 
            text: 'Your message successfully sent' 
          });
        }     
        
      })
      .catch((error) => {       
        console.error(error);      
        
        if (showModalAfterError) {
          ModalManager.open({
            mode: 'sucessBlock', 
            datas: '#messageSuccessText',  
            text: 'There was an error sending your message.'
          });
        }
      })
      .finally(() => {
        submitter.disabled = false;
      });
    }
  
    #bindEvents() {
        console.log('Binding events...');
      document.addEventListener(
        "submit",
        (e) => {
          this.#handleSubmit(e);
        },
        true
      );
    }
}