export const config = [
    {"id": 1, "name":"1 цех",
        "data":[
            {"id":"2.1", "name":"Печь №1",
                "data":[
                    {"id":"3.10", "name":"Промежуточный ковш ", "minRange":0, "maxRange":1800, "measure":"C", "type":"bar"},
                    {"id":"3.3", "name":"Кристаллизатор", "minRange":10, "maxRange":60, "measure":"C", "type":"gauge"},
                    {"id":"3.4", "name":"Сталеразливочный ковш ", "minRange":1400, "maxRange":1800, "measure":"C", "type":"gauge"},
                    {"id":"3.78", "name":"Уровень в кристаллизаторе", "minRange":0, "maxRange":180, "measure":"мм", "type":"text"},
                    {"id":"3.4", "name":"Уровень в промежуточном ковше", "minRange":0, "maxRange":800, "measure":"мм", "type":"text"}
                ]
            },
            {"id":"2.2", "name":"Печь №2",
                "data":[
                    {"id":"3.310", "name":"Промежуточный ковш ", "minRange":0, "maxRange":1800, "measure":"C", "type":"text"},
                    {"id":"3.31", "name":"Кристаллизатор", "minRange":10, "maxRange":60, "measure":"C", "type":"gauge"},
                    {"id":"3.42", "name":"Сталеразливочный ковш ", "minRange":1400, "maxRange":1800, "measure":"C", "type":"gauge"},
                    {"id":"3.718", "name":"Уровень в кристаллизаторе", "minRange":0, "maxRange":180, "measure":"мм", "type":"text"},
                    {"id":"3.42", "name":"Уровень в промежуточном ковше", "minRange":0, "maxRange":800, "measure":"мм", "type":"text"}
                ]
            },
            {"id":"2.4", "name":"Печь №3",
                "data":[
                    {"id":"3.20", "name":"Промежуточный ковш ", "minRange":0, "maxRange":1800, "measure":"C", "type":"bar"},
                    {"id":"3.32", "name":"Кристаллизатор", "minRange":10, "maxRange":60, "measure":"C", "type":"gauge"},
                    {"id":"3.14", "name":"Сталеразливочный ковш ", "minRange":1400, "maxRange":1800, "measure":"C", "type":"gauge"},
                    {"id":"3.8", "name":"Уровень в кристаллизаторе", "minRange":0, "maxRange":180, "measure":"мм", "type":"text"},
                    {"id":"3.90", "name":"Уровень в промежуточном ковше", "minRange":0, "maxRange":800, "measure":"мм", "type":"text"}
                ]
            },
            {"id":"2.5", "name":"Печь №5",
                "data":[
                ]
            }
        ]
    },
    {"id": 2, "name":"2 цех",
        "data":[
            {"id":"2.7", "name":"Печь №1",
                "data":[
                    {"id":"3.353", "name":"Кристаллизатор", "minRange":10, "maxRange":60, "measure":"C", "type":"text"},
                    {"id":"3.427", "name":"Сталеразливочный ковш ", "minRange":1400, "maxRange":1800, "measure":"C", "type":"text"},
                    {"id":"3.781", "name":"Уровень в кристаллизаторе", "minRange":0, "maxRange":180, "measure":"мм", "type":"text"},
                    {"id":"3.348", "name":"Скорость разливки", "minRange":0, "maxRange":18, "measure":"м/ч", "type":"text"}
                ]
            }
        ]
    }
];