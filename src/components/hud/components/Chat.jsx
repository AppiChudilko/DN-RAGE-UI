import React from 'react';
import EventManager from "../../../EventManager";
import $ from 'jquery';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: 400,
            fontOutline: true,
            bgState: 2,
            bgOpacity: 0.5,
            opacity: 5,
            width: 30,
            height: 30,
            timeoutHidden: 99999000,
            //timeoutHidden: 5000,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Chat.jsx', error, errorInfo); // eslint-disable-line
    }

    componentWillUnmount() {
        EventManager.removeHandler('chat');
    }

    componentDidMount() {
        let chat =
        {
            size: 0,
            history_limit: 50,  //Change this if you want to hold more/less chat history
            container: null,
            input: null,
            enabled: false,
            active: true
        };

        let closeTimeout = null;

        if (this.state.bgState === 2)
            $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + this.state.bgOpacity + ")");

        EventManager.addHandler('chat', value => {
            if (value.type == 'hideHud') {
                document.getElementById('chat').style.display = 'none';
            }
            if (value.type == 'showHud') {
                document.getElementById('chat').style.display = 'block';
            }
            if (value.type == 'updateSettings') {
                this.setState({
                    fontFamily: value.fontFamily,
                    fontSize: value.fontSize,
                    fontWeight: value.fontWeight,
                    fontOutline: value.fontOutline,
                    bgState: value.bgState,
                    bgOpacity: value.bgOpacity,
                    opacity: value.opacity,
                    width: value.width,
                    height: value.height,
                    timeoutHidden: value.timeoutHidden,
                })
            }
            if (value.type == 'push') {
                chatAPI.push(value.message);
            }
            if (value.type == 'activate') {
                chatAPI.activate(value.enable);
            }
            if (value.type == 'show') {
                chatAPI.show(value.toggle);
            }
            if (value.type == 'clear') {
                chatAPI.clear();
            }
            else return;
        });

        function enableChatInput(enable) {
            try {
                mp.trigger("chatEnabled", enable); // eslint-disable-line
            }
            catch (e) {
                console.log(e);
            }

            let ReactChat = new Chat();

            if (enable) {
                if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                }
                $("#chat_messages").fadeIn('fast');
            }
            else {
                $("#chat_messages").fadeIn('fast');
                if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                }
                if (ReactChat.state.timeoutHidden < 99999000) {
                    closeTimeout = setTimeout(function () {
                        $("#chat_messages").fadeOut('slow')
                    }, ReactChat.state.timeoutHidden);
                }
            }

            if (chat.active == false
                && enable == true)
                return;

            if (enable != (chat.input != null)) {
                //chat_printing = enable;

                try {
                    mp.invoke("focus", enable); // eslint-disable-line
                }
                catch (e) {
                    console.log(e);
                }

                if (enable) {
                    chat.input = $("#chat").append('<div><input onkeyup="chatOnKeyUp()" id="chat_msg" type="text" /></div>').children(":last");
                    chat.input.children("input").focus();

                    if (ReactChat.state.bgState === 1)
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + ReactChat.state.bgOpacity + ")");
                    else if (ReactChat.state.bgState === 2)
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + ReactChat.state.bgOpacity + ")");
                    else
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                }
                else {
                    chat.input.fadeOut('fast', function () {
                        chat.input.remove();
                        chat.input = null;
                    });

                    if (ReactChat.state.bgState === 1)
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                    else if (ReactChat.state.bgState === 2)
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, " + ReactChat.state.bgOpacity + ")");
                    else
                        $('#chat_messages').css("background-color", "rgba(0, 0, 0, 0)");
                }
            }
        }

        var timeOut = null;
        function chatOnKeyUp() {
            if (timeOut) {
                clearTimeout(timeOut);
                timeOut = null;
            }
            else
                mp.trigger('client:chatTyping', true); // eslint-disable-line

            timeOut = setTimeout(function () {
                mp.trigger('client:chatTyping', false); // eslint-disable-line
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
            push: (text) => {
                let textResult = escapeHtml(text);

                var matchColors = /!\{#\w*\}/gi;
                var match = textResult.match(matchColors);
                if (match !== null) {

                    for (let i = 0; i < match.length; i++) {
                        let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
                        textResult = textResult.replace(match[i], '<span style="color: ' + clr + '">');
                    }

                    for (let i = 0; i < match.length; i++) {
                        textResult += '</span>';
                    }
                }

                matchColors = /!\{\w*\}/gi;
                match = textResult.match(matchColors);
                if (match !== null) {

                    for (let i = 0; i < match.length; i++) {
                        let clr = match[i].replace(match[i], match[i].replace('!{', '').replace('}', ''));
                        textResult = textResult.replace(match[i], '<span style="color: #' + clr + '">');
                    }

                    for (let i = 0; i < match.length; i++) {
                        textResult += '</span>';
                    }
                }

                chat.container.prepend("<li>" + textResult + "</li>");

                chat.size++;

                if (chat.size >= chat.history_limit) {
                    chat.container.children(":last").remove();
                }

                $("#chat_messages").fadeIn('fast');
                let ReactChat = new Chat();
                if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                }
                if (ReactChat.state.timeoutHidden < 99999000) {
                    closeTimeout = setTimeout(function () {
                        $("#chat_messages").fadeOut('slow')
                    }, ReactChat.state.timeoutHidden);
                }
            },

            clear: () => {
                chat.container.html("");
            },

            activate: (toggle) => {
                if (toggle == false
                    && (chat.input != null))
                    enableChatInput(false);

                chat.active = toggle;
            },

            show: (toggle) => {
                if (toggle)
                    $("#chat").show();
                else
                    $("#chat").hide();

                chat.active = toggle;
                this.setState({show: toggle});
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

        function escapeHtml(string) {
            return String(string).replace(/[&<>"'`=\/]/g, function (s) {
                return entityMap[s];
            });
        }

        $(document).ready(function () {
            chat.container = $("#chat ul#chat_messages");

            $(".ui_element").show();
            chatAPI.push("Добро пожаловать на DEDNET 💀");
            chatAPI.push("Желаем приятной игры ;]");

            $("body").keydown(function (event) {
                if (event.which == 84 && chat.input == null
                    && chat.active == true) {
                    enableChatInput(true);
                    event.preventDefault();
                }
                else if (event.which == 13 && chat.input != null) {
                    var value = chat.input.children("input").val();

                    if (value.length > 0) {
                        if (value[0] == "/") {
                            value = value.substr(1);

                            if (value.length > 0)
                            {
                                try {
                                    mp.invoke("command", value); // eslint-disable-line
                                }
                                catch (e) {
                                    console.log(e);
                                }
                            }
                        }
                        else {
                            try {
                                mp.invoke("chatMessage", value); // eslint-disable-line
                            }
                            catch (e) {
                                console.log(e);
                            }
                        }
                    }

                    enableChatInput(false);
                }
            });
        });
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div id="chat" style={
                    {
                        width: this.state.width + '%',
                        height: this.state.height + '%',
                        opacity: this.state.opacity,
                        fontWeight: this.state.fontWeight + 'px',
                        fontFamily: this.state.fontFamily,
                        fontSize: this.state.fontSize + "px"
                    }
                } className="ui_element chatBox">
                    <ul id="chat_messages"></ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;
