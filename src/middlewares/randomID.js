export default store=>next=>action=>{
    if(!action.statusID) return next(action);
    const randomID = new Array(12).join().replace(/(.|$)/g, ()=>{return ((Math.random()*36)|0).toString(36);});
    localStorage.setItem('incodeMenu', randomID);
    localStorage.setItem('incodeMenuEmail', action.payload.userData.email);
    localStorage.setItem('incodeMenuPass', action.payload.userData.password);
    return next({...action,randomID})
}