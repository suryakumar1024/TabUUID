export function getTabUID() {

    let uid = window.sessionStorage.getItem('unique-tab-id');

    if(!uid || !window.name) {
        uid = generateUuid();
        window.sessionStorage.setItem('unique-tab-id', uid);
    }

    window.name = uid;
    return uid;
}

export function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c === 'x' ? r : ((r&0x3)|0x8);
        return v.toString(16);
    });
}