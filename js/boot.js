var bootMessageLines = [
            "System loading...<br>",
            (new Date()).toString()+"<br>",
            "&nbsp;_______&nbsp;&nbsp;&nbsp;______&nbsp;<br>|__&nbsp;&nbsp;&nbsp;__|&nbsp;|&nbsp;&nbsp;____|<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|__&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;__|&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>",
            "Terminal Faker version "+version+"<br>",
            "Ready. Type 'help' to get started.<br><br>"
        ];
Terminal.bootTerminalMessage(document.getElementById("terminal"), document.getElementById("boot"), bootMessageLines, 0);
