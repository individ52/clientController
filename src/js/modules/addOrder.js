// import {postData} from "../server/requests";
import {postData, getResource, readTextFile} from '../services/requests';
import { getTimeView } from './getTimeView';

const addOrder = () => {
    let btnSend = document.querySelector('.add-btn'),
        inputPrice = document.querySelector('#price');
btnSend.addEventListener('click', function() {
    let orders = [];
    document.querySelectorAll('.type-order').forEach(select => {
        if(select.value) {
            orders.push(select.value);
        }
    });
    if(inputPrice.value && orders.length >= 1) {
        let data = {};
        let date = new Date();
        let nowHour = date.getHours();
        data['time'] = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        data['price'] = inputPrice.value;
        data['types'] = orders.join('/');
        getResource('../../assets/server.json')
        .then(res => {addNew(res, nowHour, data)});  
    }
    });
    function addNew(obj, nowHour, data) {

        function сontrol() {
            let a;
            Object.keys(obj).forEach((key)=> {
                if(key == nowHour) {
                    a = true;
                }
            });
            return a;
        };
        if(сontrol()) {
            console.log('this time is');
            obj[nowHour].push(data);
        } else {
            console.log('this no');
            obj[nowHour] = [data];
        }
        let forSend = JSON.stringify(obj);
        console.log(forSend);
        postData('../../assets/server.json', forSend)
            .then(res => console.log(res));
    };
};
export default addOrder;
