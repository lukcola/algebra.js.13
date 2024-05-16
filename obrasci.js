var brojanjeKoraka = (function () {

    var koraci = 0;
    function increaseSteps() {
        koraci++;
    }

    return {
        walk: function () {
            increaseSteps();
        },
        getTotalSteps: function () {
            return koraci;
        },
        run: function(){
            koraci += 5;
        }
    };
})();

module.exports = brojanjeKoraka;
