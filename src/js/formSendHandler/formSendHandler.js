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
        FormSendHandler.instance = new FormSendHandler();
      }
      return FormSendHandler.instance;
    }

    #bindEvents() {
      document.addEventListener("submit", (e) => 
        {
          this.#handleSubmit(e);
        },
        true
      );
    }
    
    #handleSubmit(e) {
      const { target } = e;
      const conf = this.getConfigurationForm(target);
      const dataConfig = this.readConfiguration(conf);      

      const data = new FormData(target);
      
      this.handlerForm(e, target, dataConfig, data);    
    }   

    getConfigurationForm(elem) {      
      if (!elem.hasAttribute(`${this.attrs.form}`)) return;
      if (!elem.tagName.toLowerCase() === "form") return;
      let cfg;
      try {
        cfg = this.getJSON(elem.getAttribute(this.attrs.form));
      } catch (error) {
        alert("Ошибка парсинга JSON", error);
      }      
      return cfg;
    }

    getJSON(value) {
      return JSON.parse(value);
    }

    readConfiguration(result) {
      const {
        url,
        method = "POST",
        showModalAfterSuccess,
        preventDefault = true,        
        isNeedValidateBeforeSend,       
      } = result;

      return {
        url,
        method,
        showModalAfterSuccess,
        preventDefault,        
        isNeedValidateBeforeSend,       
      };
    }    

    handlerForm(e, target, obj, data) {     
      if (obj.preventDefault) {
        e.preventDefault();        
      }

      if (obj.isNeedValidateBeforeSend) {        
        const resValidate = FormValidator.getInstance().validateForm(target);
        if (!resValidate) {           
            return;                     
        }
      }
      this.makerRequest(obj.url, obj.method, obj.showModalAfterSuccess, data);
    }

    makerRequest(url, method, showModalAfterSuccess, data) {      
      fetch(url, {
        method,
        body: data,
      })
      .then((res) => {   
        if (!res.ok){
          throw new Error(`Ошибка ${res.status}`);
        } 
          if (showModalAfterSuccess) {
            ModalManager.open({ 
              mode: 'sucessBlock', 
              datas: '#messageSuccess', 
              text: 'Сообщение успешно отправлено' 
            });
          } else {
            throw new Error(`Данные не отправлены`);
          }    
        }         
      ).catch((error) => {        
        ModalManager.open({ 
          mode: 'sucessBlock', 
          datas: '#messageSuccess', 
          text: `Ошибка при отправке: ${error.message}`
        });
      });
    }    
}