
var LoginSession = (function() {

    var email = "";

    var getEmail = function() {
        return email;    // Or pull this from cookie/localStorage
    };

    var setEmail = function(e) {
        email = e;
    }

    return {
        getEmail: getEmail,
        setEmail: setEmail
    }
})();

export default LoginSession;