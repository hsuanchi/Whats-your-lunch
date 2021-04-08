var fire;
$.cookie.json = true;

var vue = new Vue({
    el: '#main',
    data: {
        set: {
            options: [
                { name: '麥當勞', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6519805650864!2d121.51251761432407!3d25.045882043970554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97370e28ef9%3A0xf1f9b84a76fe24df!2z6bql55W25YueLeWPsOWMl-mkqOWJjeW6lw!5e0!3m2!1szh-TW!2stw!4v1617794618635!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '蛋包飯', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1450.7451318270812!2d121.51521779177324!3d25.04470565799847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b63803b59942aee!2z5oKF5rmY6JuL5YyF6aOv!5e0!3m2!1szh-TW!2stw!4v1617794688315!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '慶三號', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.4236022029916!2d121.51067536476499!3d25.04581572004156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa22d2e1f549a1fb1!2z5oW25LiJ6JmfLeWPsOWMl-W7tuW5s-W6lw!5e0!3m2!1szh-TW!2stw!4v1617794729322!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '濃咖哩', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6634928323061!2d121.51029292916597!3d25.045814513998256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982be941b69%3A0xb7124e8c6bb762de!2z5r-D5ZKW5ZOp!5e0!3m2!1szh-TW!2stw!4v1617794746199!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '樂坡', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6927558992497!2d121.51326671432405!3d25.044498844026002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9ec6a2c88cf%3A0xb146ae06bdad54f5!2z5qW95Z2hQm9uQm94IC0g5Y-w5YyX56uZ5YmN5bqX772c5YGl5bq36aSQ55uS772c5qiC5Z2h!5e0!3m2!1szh-TW!2stw',color:'#00587a' },
                { name: '芝香涼麵', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.9183998073621!2d121.51554451097783!3d25.044443175131967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97340764f6d%3A0xeba8dc3287161c19!2z6Iqd6aaZ5ra86bq1!5e0!3m2!1szh-TW!2stw!4v1617800235382!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '薩莉亞', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.644292209353!2d121.51257331432389!3d25.046142843960062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9498103dba9%3A0xac0213204fca2ed8!2z6Jap6I6J5LqeIOWPsOWMl-mkqOWJjeW6lw!5e0!3m2!1szh-TW!2stw!4v1617800260714!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '福勝亭', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.574335512592!2d121.50600721971581!3d25.046166871436743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9731eb97f8b%3A0xe11314d2280ee2ba!2z56aP5Yud5LqtIOermeWJjeW6lw!5e0!3m2!1szh-TW!2stw!4v1617800326126!5m2!1szh-TW!2stw',color:'#008891' },
                { name: 'Campus', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6928413860974!2d121.51261211432396!3d25.044495944026117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97347d57067%3A0xb0a5bab46ff11d2!2zQ0FNUFVTIENBRkUg56uZ5YmN5bqX!5e0!3m2!1szh-TW!2stw!4v1617800355929!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '向日葵', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.64458700965!2d121.50980331432399!3d25.046132843960457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90cf1b0cfb5%3A0x5660566d7eb7684f!2z5ZCR5pel6JG157K-57e75pep6aSQ6ZaL5bCB5Ym15aeL5bqX!5e0!3m2!1szh-TW!2stw!4v1617800381929!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '強棒亭', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.8866989114653!2d121.51569321548152!3d25.045511116360494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9c866589153%3A0xf5b07c90cd643873!2z5by35qOS5LqtLemVt-W0juW8t-ajkum6teWwiOmWgOW6lw!5e0!3m2!1szh-TW!2stw!4v1617800424628!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '勝十蘭', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.4045114312821!2d121.51525353499889!3d25.04474465269959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc525fae210c48181!2z5Yud5Y2B6Jit5ouJ6bq1!5e0!3m2!1szh-TW!2stw!4v1617800464223!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '豪季水餃', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.9952132175069!2d121.51898347947805!3d25.046160088338482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78c7498522fb6e21!2z6LGq5a2j5rC06aSD5bCI6LOj5bqX77yI5Y-w5YyX6LuK56uZ5bqX77yJ!5e0!3m2!1szh-TW!2stw!4v1617800639141!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '5鄉地', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.330783064765!2d121.51630356936575!3d25.045556884398145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c79332a786c7be1!2zNemEieWcsENpbnF1ZSBUZXJyZeaJi-W3peaKq-iWqQ!5e0!3m2!1szh-TW!2stw!4v1617862930354!5m2!1szh-TW!2stw',color:'#008891' },
                { name: '邱媽媽', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.3371585451455!2d121.51537016062858!3d25.045124342773367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97316987aad%3A0x5be3c3cf9c5ad715!2z6YKx5aq95aq955qE5ZKW5ZOp6aOv!5e0!3m2!1szh-TW!2stw!4v1617862983141!5m2!1szh-TW!2stw',color:'#00587a' },
                { name: '十三川', weight: 1, on: true, url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.518470771736!2d121.5129336784797!3d25.044108778325246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97335944ae7%3A0xe9ff98a627e8ee21!2z5Y2B5LiJ5bed5pel5pys5ouJ6bq15a6a6aOf!5e0!3m2!1szh-TW!2stw!4v1617863138212!5m2!1szh-TW!2stw',color:'#008891' },
            ],
            title: '',
            ts: 0,
            hot: 0,
        },

        c: {
            setTurn: 1,
            duration: 3000,
            volume: true,
            targetTag: 'piechart',
            chatType: 'plot',
            angleType: 1,
        },


        cookieKey: 'max',
        hotKey: 'hot-cd',
        rid: '',
        turnFlag: -1,
        goFlag: false,
        targetUntil: { target: -1, count: 0, action: '' },
        saveType: '',
        angle: 0,
        target: 0,
        turn: 0,
        sum: 0,
        logs: [],
        googleMap: [],
        list: [],
        max: 50,
        uploadReady: true,
    },

    // 為了讓v-repeat v-model v-on一起用
    components: {
        options: {
            watch: {
                on: function(v) {
                    vue.draw();
                }
            }
        }
    },

    ready: function() {
        var c = $.cookie(this.cookieKey);
        if (c && Object.keys(this.c).length == Object.keys(c).length) {
            this.c = c;
        } else {
            $('.first-intro').tooltip('show');
        }
    },

    methods: {
        draw: function() {
            this.getSum();
            this.drawByPlot();
            $("#piechart,#lotteryBtn").css('transform', 'rotate(0)');
            this.saveConfig();
        },

        drawByPlot: function() {
            var data = [];
            this.set.options.map(function(option) {
                if (option.on === false) return;
                var weight = parseFloat(option.weight, 10);
                data.push({ data: weight, label: option.name, color: option.color });
            });

            $.plot('#piechart', data, {
                series: {
                    pie: {
                        show: true,
                        // radius: 3/4,
                        label: {
                        //     show: true,
                            // radius: 2/3,
                            // formatter: labelFormatter,
                            // threshold: 0.1
                            formatter: function (label, series) {
                                // return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + series.data[0][1] + '</div>';
                                return "<div style='text-anchor: start;font-family: Arial;font-size: 8px;text-align:center; padding:2px; '>" + label;
        
                            },
                        }
                    }
                },
                legend: {
                    show: false
                }
            });
        },

        getRandomArbitrary: function(min, max) {
            return Math.random() * (max - min) + min;
        },

        go: function(type, index) {
            var options = this.set.options;
            var oldAngle = this.angle;
            var tmp = 0;
            var moreAngle = 1800;
            this.getSum();
            var addAngle = this.getRandomArbitrary(0, this.sum);
            console.log(addAngle);
            //return ;

            if (this.goFlag == true || this.sum == 0) {
                return;
            }

            if (type == 'c') {
                this.turnFlag = this.c.setTurn;
                this.saveConfig();
            } else if (type == 'option') {
                if (options[index].on === false) {
                    return;
                }
                this.targetUntil.target = index;
                this.targetUntil.count = 0;
                this.targetUntil.action = 'run';
                this.saveConfig();
            }

            //console.log(addAngle);
            for (var i = 0; i <= options.length - 1; i++) {
                if (options[i].on === false) continue;
                tmp += options[i].weight;
                //console.log(tmp,i,options[i].weight / sum);
                if (tmp > addAngle) {
                    this.target = i;
                    var targetAngle = 0;
                    var nextStart = Math.floor(tmp / this.sum * 360);
                    if (options[i - 1]) {
                        var targetAngle = Math.floor((tmp - options[i].weight) / this.sum * 360);
                    }
                    console.log(targetAngle, nextStart);
                    addAngle = targetAngle + this.getRandomArbitrary(0, nextStart - targetAngle);
                    break;
                }
                //tmp += options[i].weight;
            };

            if (this.c.chatType == 'google') {
                this.c.targetTag = 'lotteryBtn';
            }

            if (this.c.targetTag == 'piechart') {
                addAngle = 360 - addAngle;
            }

            if (this.c.angleType == -1) {
                moreAngle *= -1;
                addAngle = addAngle - 360;
            }

            this.goFlag = true;
            this.angle = addAngle;
            $("#" + this.c.targetTag).rotate({
                angle: oldAngle,
                duration: this.c.duration,
                animateTo: addAngle + moreAngle,
                callback: this.goDone,
            });
        },

        goDone: function() {
            var a = {};
            var log = {};
            var times = (parseInt(this.set.options[this.target].times) || 0) + 1;
            this.goFlag = false;
            this.turn = this.turn + 1;
            this.logs.pop()
            log.ts = new Date().getTime();
            log.target = this.target;
            log.content = this.set.options[this.target].name;
            log.shop_url = this.set.options[this.target].url;
            this.logs.unshift(log);
            // if (this.logs.length > 1000) {
                // this.logs.pop();
            // }

            if (this.c.targetTag == 'piechart') {
                $("#piechart .pieLabel").css('transform', 'rotate(' + (360 - this.angle) + 'deg)');
            }

            this.set.options[log.target].$set('times', times);
            if (this.turnFlag >= 1) {
                this.turnFlag--;
                if (this.turnFlag >= 1) {
                    this.go();
                }
            } else if (this.targetUntil.action == 'run') {
                this.targetUntil.count++;
                if (this.targetUntil.target !== this.target) {
                    this.go();
                } else {
                    this.targetUntil.action = 'end';
                    // this.targetUntil.target = -1;
                }
            } else {
                this.saveConfig();
            }
        },

        getSum: function() {
            var sum = 0;
            this.set.options.map(function(option) {
                option.$set('weight', Math.abs(option.weight));
                if (option.on === false) return;
                sum += parseFloat(option.weight, 10);
            });
            this.sum = sum;
        },

        saveConfig: function() {
            $.cookie(this.cookieKey, this.c, { path: '/', expires: 365 });
        },
    }
});

$(window).resize(vue.draw);

function labelFormatter(label, series) {
    return "<div style='text-anchor: start;font-family: Arial;font-size: 8px;text-align:center; padding:2px; color:black;'>" + label;
    // return "<div style='text-anchor: start;font-family: Arial;font-size: 12px;text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}
