var tdd = tdd || {};
tdd.app = tdd.app || {};
tdd.app.Main = function (title) {
    'use strict';
    if (!title) {
        throw Error('Must pass title into constructor');
    }

    this.title = title;

    this.getTitle = function () {
        return this.title;
    };

    this.getDefaultImageFormat = function () {
        return tdd.app.ImageType.JPG;
    };

    this.getDefaultBorderStyle = function () {
        return tdd.app.BorderStyle.SOLID;
    };
};
