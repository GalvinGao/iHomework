window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
        window.setTimeout(callback, 1000 / 60)
    }
})();
(function () {
    var canvas = document.body.appendChild(document.createElement('canvas')),
        context = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        dirtyRegions = [],
        quantity = 16,
        papers = [],
        layoutIndex = 0,
        layoutInterval = -1,
        layouts = [function () {
            papers.forEach(function (paper, i) {
                var radius = 0.001,
                    x = Math.sin(i / quantity * Math.PI * 2) * radius,
                    y = Math.cos(i / quantity * Math.PI * 2) * radius,
                    angle = Math.atan2(y, x) * 180 / Math.PI,
                    size = 100;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = 1
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var radius = 2,
                    x = Math.sin(i / quantity * Math.PI * 2) * radius,
                    y = Math.cos(i / quantity * Math.PI * 2) * radius,
                    angle = Math.atan2(y, x) * 180 / Math.PI,
                    size = 100;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = 0.7
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var radius = 2,
                    x = Math.sin(i / quantity * Math.PI * 2) * radius,
                    y = Math.cos(i / quantity * Math.PI * 2) * radius,
                    angle = Math.atan2(y, x) * 180 / Math.PI - 45,
                    size = 100;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = Math.min(0.5 + i / quantity, 1)
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var radius = 2,
                    x = Math.sin(i / quantity * Math.PI * 2) * radius,
                    y = Math.cos(i / quantity * Math.PI * 2) * radius,
                    angle = Math.atan2(y, x) * 180 / Math.PI - 45,
                    size = 90 * (1 + (i % 2));
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = 1
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var x = (quantity - i) - (quantity / 2),
                    y = -0.5,
                    angle = 0,
                    size = 250;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = 0.8
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var radius = Math.max(i / (quantity * 0.75), 0.4),
                    x = Math.sin(i / quantity * Math.PI * 2) * radius,
                    y = Math.cos(i / quantity * Math.PI * 2) * radius,
                    angle = Math.atan2(y, x) * 180 / Math.PI,
                    size = radius * radius * 150;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = Math.min(0.5 + ((quantity - i) / quantity), 1)
            })
        }, function () {
            papers.forEach(function (paper, i) {
                var x = (i % 4) - 2,
                    y = Math.floor(i / 4) - 2,
                    angle = 0,
                    size = 120;
                paper.interpolations = {
                    x: x,
                    y: y,
                    size: size,
                    angle: angle
                };
                paper.speed = Math.min(0.5 + i / quantity, 1)
            })
        }];
    for (var i = 0; i < quantity; i++) {
        papers.push(new Paper(0, 0, 0, 1, i / quantity))
    }
    setLayout(0);
    window.addEventListener('resize', resize, false);
    canvas.addEventListener('click', click, false);
    document.addEventListener('keydown', keydown, false);
    resize();
    animate();
    layoutInterval = setInterval(function () {
        nextLayout()
    }, 5000);

    function keydown(event) {
        switch (event.keyCode) {
            case 32:
                clearInterval(layoutInterval);
                nextLayout();
                break;
            case 37:
                clearInterval(layoutInterval);
                previousLayout();
                break;
            case 39:
                clearInterval(layoutInterval);
                nextLayout();
                break
        }
    }

    function click() {
        nextLayout();
        clearInterval(layoutInterval)
    }

    function resize() {
        canvas.width = width = window.innerWidth;
        canvas.height = height = window.innerHeight
    }

    function previousLayout() {
        setLayout(layoutIndex - 1)
    }

    function nextLayout() {
        setLayout(layoutIndex + 1)
    }

    function setLayout(i) {
        layoutIndex = (i < 0 ? layouts.length - Math.abs(i) : i) % layouts.length;
        layouts[layoutIndex]()
    }

    function invalidate(x, y, w, h, angle) {
        var tx = x;
        var ty = y;
        var region = new Region();
        region.inflate(tx, ty);
        region.inflate(tx + w, ty + w);
        region.expand(4, 4);
        dirtyRegions.push(region)
    }

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        while (dirtyRegions.length) {
            var region = dirtyRegions.pop()
        }
        for (var i = 0; i < papers.length; i++) {
            var paper = papers[i];
            paper.step(0.01);
            var x = ~~(paper.x * paper.size + width * 0.5);
            var y = ~~(paper.y * paper.size + height * 0.5);
            invalidate(x, y, paper.size, paper.size, paper.angle);
            context.save();
            context.translate(x, y);
            context.rotate(paper.angle * Math.PI / 180);
            context.beginPath();
            context.fillStyle = paper.colorB.toString();
            context.fillRect(0, 0, paper.size, paper.size);
            var shadowA = context.createLinearGradient(0, 0, paper.size, paper.size);
            shadowA.addColorStop(0, 'rgba(0,0,0,' + (0.9 * paper.progress) + ')');
            shadowA.addColorStop(1, 'rgba(0,0,0,0)');
            context.beginPath();
            context.fillStyle = shadowA;
            context.fillRect(0, 0, paper.size, paper.size);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(paper.size, 0);
            context.lineTo(paper.fold, paper.fold);
            context.lineTo(0, paper.size);
            context.fillStyle = paper.colorA.toString();
            context.fill();
            var shadowB = context.createLinearGradient(0, 0, paper.size, paper.size);
            shadowB.addColorStop(0, 'rgba(0,0,0,' + (0.5 - Math.abs(0.5 - paper.progress)) * 0.2 + ')');
            shadowB.addColorStop(1, 'rgba(0,0,0,0)');
            context.beginPath();
            context.moveTo(paper.size, 0);
            context.lineTo(paper.fold, paper.fold);
            context.lineTo(paper.size, paper.size);
            context.lineTo(paper.size, 0);
            context.fillStyle = shadowB;
            context.fill();
            var shadowC = context.createLinearGradient(0, 0, paper.size, paper.size);
            shadowC.addColorStop(0, 'rgba(0,0,0,0)');
            shadowC.addColorStop(1, 'rgba(0,0,0,' + ((1 - paper.progress) * 0.7) + ')');
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(paper.size, 0);
            context.lineTo(paper.fold, paper.fold);
            context.lineTo(0, paper.size);
            context.lineTo(0, 0);
            context.fillStyle = shadowC;
            context.fill();
            context.beginPath();
            context.moveTo(paper.size, 0);
            context.lineTo(0, paper.size);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(0,0,0,' + (0.5 - Math.abs(0.5 - paper.progress)) * 0.2 + ')';
            context.stroke();
            context.beginPath();
            context.moveTo(paper.size * 0.5, paper.size * 0.5);
            context.lineTo(paper.fold, paper.fold);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(0,0,0,' + (0.5 - Math.abs(0.5 - paper.progress)) * 0.2 + ')';
            context.stroke();
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(paper.size, 0);
            context.lineTo(paper.fold, paper.fold);
            context.lineTo(0, paper.size);
            context.lineWidth = 2;
            context.strokeStyle = 'rgba(0,0,0,0.2)';
            context.stroke();
            context.restore()
        }
        requestAnimFrame(animate)
    }

    function Paper(x, y, angle, size, progress) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.size = size;
        this.fold = this.size;
        this.colorA = new HSL().randomize();
        this.colorB = new HSL().randomize();
        this.progress = progress || 0;
        this.speed = 1;
        this.interpolations = {
            x: this.x,
            y: this.y,
            angle: this.angle,
            size: this.size
        };
        this.step = function (v) {
            this.progress += v;
            this.progress /= 1.005;
            this.fold = this.size * this.progress;
            this.colorA.l = 30 + (this.progress * 20);
            this.colorB.l = 20 + ((1 - this.progress) * 30);
            if (this.progress >= 1) {
                this.reset()
            }
            this.interpolate(0.15 * this.speed)
        }
        this.interpolate = function (v) {
            for (var property in this.interpolations) {
                this[property] += (this.interpolations[property] - this[property]) * v
            }
        }
        this.reset = function () {
            this.progress = 0;
            this.fold = 0;
            var temp = this.colorB;
            this.colorB = this.colorA;
            this.colorA = temp.randomize()
        }
    }

    function HSL(h, s, l) {
        this.h = h || 0;
        this.s = s || 100;
        this.l = l || 50;
        this.randomize = function () {
            this.h = ~~(Math.random() * 360);
            this.s = ~~(30 + Math.random() * 50);
            this.l = 50;
            return this
        }
        this.toString = function () {
            return 'hsl(' + this.h + ',' + this.s + '%,' + this.l + '%)'
        }
    }

    function Region() {
        this.reset = function () {
            this.left = 999999;
            this.top = 999999;
            this.right = 0;
            this.bottom = 0
        };
        this.inflate = function (x, y) {
            this.left = Math.min(this.left, x);
            this.top = Math.min(this.top, y);
            this.right = Math.max(this.right, x);
            this.bottom = Math.max(this.bottom, y)
        };
        this.expand = function (x, y) {
            this.left -= x;
            this.top -= y;
            this.right += x;
            this.bottom += y
        };
        this.reset()
    }
})()
