(function ($) {
    "use strict";

    // for better performance - to avoid searching in DOM
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');
    var typing = $('#typing');


    // my color assigned by the server
    var myColor = false;
    // my name sent to the server
    var myName = false;

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
                                    + 'support WebSockets.'} ));
        input.hide();
        $('span').hide();
        return;
    }

    // open connection
    var connection = new WebSocket('ws://192.168.1.74:1337');

    connection.onopen = function () {
        // first we want users to enter their names
        var userData = localStorage.getItem('userData');
        userData = userData && JSON.parse(userData);

        input.removeAttr('disabled');

        if (userData) {
            myName = userData.name;
            connection.send(myName);
        } else {
            status.text('Choose name:');
        }
        
    };

    connection.onerror = function (error) {
        // just in there were some problems with conenction...
        content.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
                                    + 'connection or the server is down.' } ));
    };

    // most important part - incoming messages
    connection.onmessage = function (message) {
        // try to parse JSON message. Because we know that the server always returns
        // JSON this should work without any problem but we should make sure that
        // the massage is not chunked or otherwise damaged.
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        // NOTE: if you're not sure about the JSON structure
        // check the server source code above
        if (json.type === 'color') { // first response from the server with user's color
            myColor = json.data;
            status.text(myName + ': ').css('color', myColor);
            var userData = {name: myName};

            localStorage.setItem('userData', JSON.stringify(userData));
            input.removeAttr('disabled').focus();
            // from now user can start sending messages
        } else if (json.type === 'history') { // entire message history
            // insert every single message to the chat window
            for (var i=0; i < json.data.length; i++) {
                addMessage(json.data[i].author, json.data[i].text,
                           json.data[i].color, new Date(json.data[i].time));
            }
        } else if (json.type === 'typing') {
            var usersTyping = Object.keys(json.data);
            var resultTyping = [];

            for (var i = 0; i < usersTyping.length; i++) {
                resultTyping.push(json.data[usersTyping[i]])
            }
            typing.text(resultTyping.length ? resultTyping.join(', ') + ' - Is typing' : '');
        } else if (json.type === 'message') { // it's a single message
            input.removeAttr('disabled'); // let the user write another message
            input.focus(); // focus
            addMessage(json.data.author, json.data.text,
                       json.data.color, new Date(json.data.time));
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
        }
    };

    /**
     * Send mesage when user presses Enter key
     */

    var
     debounceIndex,
     debounceDelay = 500;
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            var msg = $(this).val();
            if (!msg) {
                return;
            }
            // send the message as an ordinary text
            connection.send(msg);
            $(this).val('');
            // disable the input field to make the user wait until server
            // sends back response
            input.attr('disabled', 'disabled');

            // we know that the first message sent from a user their name
            if (myName === false) {
                myName = msg;
            }
        }
		
		if (!myName) return;

        clearTimeout(debounceIndex);

        if (!debounceIndex) {
			connection.send('{{is typing}}');
		}

		debounceIndex = setTimeout(function() {
		   connection.send('{{end typing}}');
		   debounceIndex = null;
		}, debounceDelay);
    });

    /**
     * This method is optional. If the server wasn't able to respond to the
     * in 3 seconds then show some error message to notify the user that
     * something is wrong.
     */
    setInterval(function() {
        if (connection.readyState !== 1) {
            status.text('Error');
            input.attr('disabled', 'disabled').val('Unable to comminucate '
                                                 + 'with the WebSocket server.');
        }
    }, 3000);

    /**
     * Add message to the chat window
     */
    function addMessage(author, message, color, dt) {
        message = message.trim();
        var regexpImage = /(https?:\/\/.*\.(jpg|jpeg|png|gif|svg)|(data.+?base64.+))/g;

        if (regexpImage.test(message)) {
            message = message.split(' ').map(function(item) {
                return item.replace(regexpImage, function(value) {
                    return '<img class="image" src="' + value +'" alt="image" />';
                });
            }).join(' ');
        }

        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
})(jQuery);