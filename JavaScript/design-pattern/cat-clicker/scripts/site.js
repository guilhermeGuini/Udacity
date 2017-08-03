/* ===== Model ===== */

var model = {
    currentCat: null,
    cats: [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/cat.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        admin: false
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/cat2.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        admin: false
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/cat3.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        admin: false
    }
    ]
};

/* ===== Octopus ===== */


var octopus = {

   init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    cancel: function() {
        model.currentCat.admin = false;
        catView.render();
    },

    save: function(name, imgUrl, click) {
        model.currentCat.name = name;
        model.currentCat.imgSrc = imgUrl;
        model.currentCat.clickCount = click;
        model.currentCat.admin = false;

        catView.render();
        catListView.render();
    },

    showForm: function() {
        model.currentCat.admin = true;
        catView.render();
    }
};

/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');
        this.adminElem = document.getElementById('btnAdmin');

        this.newName = document.getElementById('txtName');
        this.newImgUrl = document.getElementById('txtImgUrl');
        this.newClick =  document.getElementById('txtClicks');

        this.btnCancel = document.getElementById('btnCancel');
        this.btnSave = document.getElementById('btnSave');
        this.formElem = document.getElementById('form');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // on click, show form
        this.adminElem.addEventListener('click', function(){
            octopus.showForm();
        });

        // on click, save data in model
        this.btnCancel.addEventListener('click', function(event) {
            octopus.cancel();
            event.preventDefault();
        });

        // on click, cancel closing form
        this.btnSave.addEventListener('click', function (event) {
            octopus.save(catView.newName.value,
                         catView.newImgUrl.value,
                         catView.newClick.value);
            event.preventDefault();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;

        this.newName.value = currentCat.name;
        this.newClick.value = currentCat.clickCount;
        this.newImgUrl.value = currentCat.imgSrc;

        this.catImageElem.src = currentCat.imgSrc;
        this.formElem.style = currentCat.admin == true ? "display: block" : "display: none";
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();