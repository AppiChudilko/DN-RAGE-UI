let chat =
{
	size: 0,
	history_limit: 15,  //Change this if you want to hold more/less chat history
	container: null,
	input: null,
	enabled: false,
	active: true
};

function enableChatInput(enable)
{
	mp.trigger("chatEnabled", enable);
	
	if(chat.active == false
		&& enable == true)
		return;
	
    if (enable != (chat.input != null))
	{
        //chat_printing = enable;

        mp.invoke("focus", enable);

        if (enable)
		{
            chat.input = $("#chat").append('<div><input onkeyup="chatOnKeyUp()" id="chat_msg" type="text" /></div>').children(":last");
			chat.input.children("input").focus();
			$('#chat_messages').css("background-color", "rgba(0, 0, 0, 0.5)");
        } 
		else
		{
            chat.input.fadeOut('fast', function()
			{
                chat.input.remove();
                chat.input = null;
            });
			$('#chat_messages').css("background-color", "rgba(0, 0, 0, 0.0)");
        }
    }
}

function eventSend(data)
{
	if (data.type == 'hideHud') {
		document.getElementById('chat').style.display = 'none';
	}
	if (data.type == 'showHud') {
		document.getElementById('chat').style.display = 'block';
	}
}

var timeOut = null;
function chatOnKeyUp() {
	if (timeOut) {
		clearTimeout(timeOut);
		timeOut = null;
	}
	else
		mp.trigger('client:chatTyping', true);

	timeOut = setTimeout(function () {
		mp.trigger('client:chatTyping', false);
		timeOut = null;
	}, 1000);
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

var chatAPI =
{
	push: (text) =>
	{
		textResult = escapeHtml(text);
		
		var matchColors = /!\{#\w*\}/gi;
		var match = textResult.match(matchColors);
		if (match !== null) {

			for(let i = 0; i < match.length; i++) {
				let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
					textResult = textResult.replace(match[i], '<span style="color: ' + clr + '">');
			}
			
			for(let i = 0; i < match.length; i++) {
				textResult += '</span>';
			}
		}
		
		matchColors = /!\{\w*\}/gi;
		match = textResult.match(matchColors);
		if (match !== null) {

			for(let i = 0; i < match.length; i++) {
				let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
					textResult = textResult.replace(match[i], '<span style="color: #' + clr + '">');
			}
			
			for(let i = 0; i < match.length; i++) {
				textResult += '</span>';
			}
		}
		
		chat.container.prepend("<li>" + textResult + "</li>");

		chat.size++;

		if (chat.size >= chat.history_limit)
		{
			chat.container.children(":last").remove();
		}
	},
	
	clear: () =>
	{
		chat.container.html("");
	},
	
	activate: (toggle) =>
	{
		if (toggle == false
			&& (chat.input != null))
			enableChatInput(false);
			
		chat.active = toggle;
	},
	
	show: (toggle) =>
	{
		if(toggle)
			$("#chat").show();
		else
			$("#chat").hide();
		
		chat.active = toggle;
	}
};

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

$(document).ready(function()
{
	chat.container = $("#chat ul#chat_messages");
	
    $(".ui_element").show();
    chatAPI.push("Добро пожаловать на Appi RolePlay");
    chatAPI.push("Желаем приятной игры ;)");
    chatAPI.push("");
    chatAPI.push(" ¯\\_(ツ)_/¯");
    chatAPI.push("Если очень долго грузит, лучше перезайдите");

    $("body").keydown(function(event)
	{
        if (event.which == 84 && chat.input == null
			&& chat.active == true)
		{
            enableChatInput(true);
			event.preventDefault();
        } 
		else if (event.which == 13 && chat.input != null)
		{
            var value = chat.input.children("input").val();

            if (value.length > 0) 
			{
                if (value[0] == "/")
				{
                    value = value.substr(1);

                    if (value.length > 0)
                        mp.invoke("command", value);
                }
				else
				{
                    mp.invoke("chatMessage", value);
                }
            }

            enableChatInput(false);
        }
    });
});