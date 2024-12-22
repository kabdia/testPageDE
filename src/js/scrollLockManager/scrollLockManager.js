export class ScrollLockManager {

    static instance = null;
    static body = document.querySelector('body');
    static classScroll = 'noscroll';
    constructor() {
        if (ScrollLockManager.instance) {
            return ScrollLockManager.instance;
        }
        
        ScrollLockManager.instance = this;
    }

    static lock() {        
        ScrollLockManager.body.classList.add(ScrollLockManager.classScroll);
    }

    static unlock() {
        ScrollLockManager.body.classList.remove(ScrollLockManager.classScroll);
    }
}