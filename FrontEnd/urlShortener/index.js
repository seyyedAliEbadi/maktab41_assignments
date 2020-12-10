$("#subButton").click(function(e) {
    $.ajax({
        type: "POST",
        url: "https://cleanuri.com/api/v1/shorten",
        data: { 'url': $("#inputURL").val() },

        success: function(request) {
            $("#dialogueBox").attr({ 'value': request['result_url'] });
        }
    });
});