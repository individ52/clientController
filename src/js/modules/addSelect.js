const addSelect = (placeSelector, optionSelector) => {
    let placeForOptions = document.querySelector(placeSelector),
    select = document.querySelector(optionSelector);
    let selects = [select];
    select.addEventListener('change', function() {
        addNewClone();
    });
    function addNewClone() {
        let clone = select.cloneNode(true);
        placeForOptions.appendChild(clone);
        selects.push(clone);
        clone.addEventListener('change', function() {
            if(this.value === "delete") {
                this.remove();
            } else {
                addNewClone();
            } 
        });
    }

};

export default addSelect;