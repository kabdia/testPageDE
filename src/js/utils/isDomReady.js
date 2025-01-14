export function isDomReady() {
    return new Promise((resolve) => {
        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                resolve();
            });
        } else {
            resolve();
        }
    });
}