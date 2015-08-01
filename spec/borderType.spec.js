describe('enum', function () {
    'use strict';
    describe('BorderType', function () {
        it('should not be modifiable.', function (done) {
            assert(Object.isFrozen(tdd.app.BorderStyle) === true);
            done();
        });
        it('should have property SOLID with value "solid".', function (done) {
            expect(tdd.app.BorderStyle.SOLID).to.equal("solid");
            done();
        });
        it('should have property DASHED with value "dashed".', function (done) {
            expect(tdd.app.BorderStyle.DASHED).to.equal("dashed");
            done();
        });
        it('should have property CUSTOM with value "custom".', function (done) {
            expect(tdd.app.BorderStyle.CUSTOM).to.equal("custom");
            done();
        });
    });
});
