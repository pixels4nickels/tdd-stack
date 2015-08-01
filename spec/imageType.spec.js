describe('enum', function () {
    'use strict';
    describe('ImageType', function () {
        it('should not be modifiable.', function (done) {
            assert(Object.isFrozen(tdd.app.ImageType) === true);
            done();
        });
        it('should have property GIF with value "gif".', function (done) {
            expect(tdd.app.ImageType.GIF).to.equal("gif");
            done();
        });
        it('should have property JPG with value "jpg".', function (done) {
            expect(tdd.app.ImageType.JPG).to.equal("jpg");
            done();
        });
        it('should have property PNG with value "png".', function (done) {
            expect(tdd.app.ImageType.PNG).to.equal("png");
            done();
        });
    });
});
