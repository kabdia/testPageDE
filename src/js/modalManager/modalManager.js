import { ScrollLockManager } from "../scrollLockManager/scrollLockManager";

export class ModalManager {
    
    static instance = null;
  
    
    static stateClasses = {
      open: 'modal--active',
      close: 'modal--close',
    };
    static attrs = {
        openModal: 'data-open-modal',
        closeModal: 'data-close-modal'
    }
    
    constructor() {
      if (ModalManager.instance) {
        return ModalManager.instance;
      } 
      this.init();  
      ModalManager.instance = this;
    }
  
    
    static getInstance() {
      if (!ModalManager.instance) {
        ModalManager.instance = new ModalManager();
      }
      return ModalManager.instance;
    }
  
    init() {
        document.addEventListener('click', (e) => {
            const button = e.target.closest('[data-open-modal]');
            if (button) {            
            ModalManager.open({ mode: 'formBlock', datas: '#modalWindow' });
            }
        });

        document.addEventListener('click', (e) => {
            const elem = e.target.hasAttribute('data-close-modal');
            if (elem) {
                ModalManager.close({ mode: 'formBlock', datas: '#modalWindow' });
                ModalManager.close({ mode: 'formBlock', datas: '#btnCloseModal' });
                ModalManager.close({ mode: 'formBlock', datas: '#messageSuccess' });
                ModalManager.close({ mode: 'formBlock', datas: '#btnCloseModalSuccess' });
            }
        })
    }
    
    static open({ mode, datas, text }) {
      let modal;
  
      if (mode === 'formBlock' && datas) {
        modal = document.querySelector(datas);
        if (modal) {
          modal.classList.add(ModalManager.stateClasses.open);
        } 
      } else if (mode === 'sucessBlock' && datas) {
        modal = document.querySelector(datas);        
        const textBlock = document.querySelector('#messageSuccessText');        
        textBlock.innerHTML = `<span>${text}</span>`;
        modal.classList.add(ModalManager.stateClasses.open);
      } 
      ScrollLockManager.lock();
    } 
  
    static close({ mode, datas }){
        let modal;
        if (mode === 'formBlock' && datas) {
            modal = document.querySelector(datas);
            if (modal) {
                modal.classList.remove(ModalManager.stateClasses.open);
            } 
        } else if (mode === 'sucessBlock') {
            modal = document.querySelector(datas);
            if (modal) {
                modal.classList.remove(ModalManager.stateClasses.open);
            }        
        } 
      ScrollLockManager.unlock();
    }
  }


