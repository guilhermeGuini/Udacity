var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/');

    this.incrementerCount = function () {
        this.clickCount(this.clickCount() + 1);
    };

    this.levelCat = ko.computed(function() {
        if(this.clickCount() < 11)
            return "Newborn";

        if(this.clickCount() < 20)
            return "Infant";

        return "Old";
    }, this);
}

ko.applyBindings(new ViewModel());