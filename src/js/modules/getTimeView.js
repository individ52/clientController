const getTimeView = (ms) => {
    let sec = Math.floor((ms/1000)%60);
    let min = Math.floor((ms/60000)%60);
    let hour = Math.floor((ms/3600000)%24);
    console.log(`${hour}:${min}:${sec}`);
};

export {getTimeView};