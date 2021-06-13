import addSelect from "./modules/addSelect";
import addOrder from "./modules/addOrder";

window.addEventListener('DOMContentLoaded', ()=> {
    addSelect('.type-orders', '.type-order');
    addOrder();
});