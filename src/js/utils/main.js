import { FormSendHandler } from '../formSendHandler/formSendHandler.js';
import { FormValidator } from '../formValidator/formValidator.js';
import { ModalManager } from '../modalManager/modalManager.js';
import { ScrollLockManager } from '../scrollLockManager/scrollLockManager.js';

import { isDomReady } from './isDomReady.js';
import './style.js';

isDomReady().then(() => {    
    new ScrollLockManager();
    new ModalManager();
    new FormValidator();
    new FormSendHandler();
});


