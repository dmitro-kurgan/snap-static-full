    $("input[name=phone]").intlTelInput({
       initialCountry: "ua",
       nationalMode: false,
       formatOnDisplay: true,
       utilsScript: "libs/jquery.form-sender/utils.js",
       preferredCountries: ['ua', 'ru', 'by'],
    });
    var _emailStyle = {
        header: {
            background_color: "f3f3f3",
            color: "3579eb"
        },
        body: {
            background_color: "f3f3f3",
            color: "000000"
        },
        footer: {
            background_color: "f3f3f3",
            color: "3579eb"
        }
    };
    FormSender.initSettings({
        dir: "libs/jquery.form-sender/",
        clearFields: false
    });
    var loading = function() {
        // $("#order-thanks-popup .modal-title").html("<h1>Обработка</h1>");
        // $("#order-thanks-popup .modal-body").html("<object data=\"/images/loader.svg\" class=\"loader\" type=\"image/svg+xml\" id=\"svg1\"></object>");
        // $('#order-thanks-popup').modal("show");
        // window.location.href = "thanks.html";
    }
     FormSender.registerForm({
        id: "order-form",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            window.location.href = "thank.html";
        },
        onError: function(json) {
            $('#ThankModal').modal("show");
        },
        onWait: function() {
            loading();
        }
    });
    FormSender.registerForm({
        id: "order-form2",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            window.location.href = "thank.html";
        },
        onError: function(json) {
            $('#ThankModal').modal("show");
        },
        onWait: function() {
            loading();
        }
    });
    FormSender.registerForm({
        id: "order-form3",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            window.location.href = "thank.html";
        },
        onError: function(json) {
            $('#ThankModal').modal("show");
        },
        onWait: function() {
            loading();
        }
    });
    FormSender.registerForm({
        id: "order-form4",
        emailStyle: _emailStyle,
        onSuccess: function(json) {
            window.location.href = "thank.html";
        },
        onError: function(json) {
            $('#ThankModal').modal("show");
        },
        onWait: function() {
            loading();
        }
    });
    $('input[name=phone]').keyup(function() {
        if ($(this).intlTelInput("isValidNumber")) {
            $(this).removeClass("input-invalid");
            $(this).addClass("input-valid");
        } else {
            $(this).removeClass("input-valid");
            $(this).addClass("input-invalid");
        }
    });