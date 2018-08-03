[
    {
        "id": "461038be.949478",
        "type": "inject",
        "z": "9ea30758.0be2f8",
        "name": "solution4",
        "topic": "",
        "payload": "[{\"name\":\"fred\",\"age\":25,\"email\":\"fred@acmeA.inc\"},{\"name\":\"jack\",\"age\":35,\"email\":\"jack@acmeB.inc\"},{\"name\":\"jill\",\"age\":30,\"email\":\"jill@acmeC.inc\"}]",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 140,
        "y": 380,
        "wires": [
            [
                "9d6eef6.4a2191"
            ]
        ]
    },
    {
        "id": "931a0b7b.f7d238",
        "type": "inject",
        "z": "9ea30758.0be2f8",
        "name": "solution1",
        "topic": "",
        "payload": "{\"name\":\"fred\",\"age\":25,\"email\":\"fred@acme.inc\"}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 140,
        "y": 80,
        "wires": [
            [
                "214148d7.53d258"
            ]
        ]
    },
    {
        "id": "f58e6fca.1cb23",
        "type": "debug",
        "z": "9ea30758.0be2f8",
        "name": "output1",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 600,
        "y": 80,
        "wires": []
    },
    {
        "id": "1d61257c.5c2f8b",
        "type": "inject",
        "z": "9ea30758.0be2f8",
        "name": "solution2",
        "topic": "",
        "payload": "{\"name\":\"fred\",\"age\":25,\"email\":\"fred@acme.inc\"}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 140,
        "y": 180,
        "wires": [
            [
                "6676eed7.be6ab"
            ]
        ]
    },
    {
        "id": "19bfa2a0.b8953d",
        "type": "debug",
        "z": "9ea30758.0be2f8",
        "name": "output2",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 600,
        "y": 180,
        "wires": []
    },
    {
        "id": "6b9410.b9c66bf",
        "type": "inject",
        "z": "9ea30758.0be2f8",
        "name": "solution3",
        "topic": "",
        "payload": "[{\"name\":\"fred\",\"age\":25,\"email\":\"fred@acme.inc\"},{\"name\":\"jack\",\"age\":35,\"email\":\"jack@acme.inc\"},{\"name\":\"jill\",\"age\":30,\"email\":\"jill@acme.inc\"}]",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 140,
        "y": 280,
        "wires": [
            [
                "a0625493.e57928"
            ]
        ]
    },
    {
        "id": "82497eb9.315ea",
        "type": "debug",
        "z": "9ea30758.0be2f8",
        "name": "output3",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 600,
        "y": 280,
        "wires": []
    },
    {
        "id": "92cca1da.6cbf5",
        "type": "debug",
        "z": "9ea30758.0be2f8",
        "name": "output4",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 600,
        "y": 380,
        "wires": []
    },
    {
        "id": "214148d7.53d258",
        "type": "change",
        "z": "9ea30758.0be2f8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.name",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 80,
        "wires": [
            [
                "f58e6fca.1cb23"
            ]
        ]
    },
    {
        "id": "6676eed7.be6ab",
        "type": "template",
        "z": "9ea30758.0be2f8",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{payload.name}} is {{payload.age}} years old",
        "output": "str",
        "x": 360,
        "y": 180,
        "wires": [
            [
                "19bfa2a0.b8953d"
            ]
        ]
    },
    {
        "id": "a0625493.e57928",
        "type": "change",
        "z": "9ea30758.0be2f8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload {            \tname : \"Age is \"&age&' '&\"and mail address is \"&email\t}",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 380,
        "y": 280,
        "wires": [
            [
                "82497eb9.315ea"
            ]
        ]
    },
    {
        "id": "9d6eef6.4a2191",
        "type": "change",
        "z": "9ea30758.0be2f8",
        "name": "oscarcuenca2",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$replace($replace($join(payload.($substring(email,0,4)&' '&'works'&' '&'for'&' '&$substring(email,5,10))),\"incjack\",\"inc, jack\"),\"incjill\",\"inc, jill\")",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 380,
        "y": 380,
        "wires": [
            [
                "92cca1da.6cbf5"
            ]
        ]
    }
]