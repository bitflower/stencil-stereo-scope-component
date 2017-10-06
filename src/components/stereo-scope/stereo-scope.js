var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component, Prop } from '@stencil/core';
let StereoScope = class StereoScope {
    render() {
        return (h("div", null,
            h("input", { id: "speed", type: "range", value: "15", max: "20", min: "2", step: "1", onChange: (event) => this.speedChanged(event) }),
            h("canvas", { id: "c" })));
    }
    componentWillLoad() {
        console.log('The component is about to be rendered');
        this.preloadImage();
        // this.animateMe();
    }
    componentDidLoad() {
        console.log('The component has been rendered');
    }
    // Source: https://stackoverflow.com/questions/14757659/loading-an-image-onto-a-canvas-with-javascript
    preloadImage() {
        return __awaiter(this, void 0, void 0, function* () {
            let img = yield this.loadImage("http://cloud.bitflower.net/a/c.jpg");
            // ctx.drawImage(img, 0, 0);     
        });
    }
    loadImage(url) {
        return new Promise(resolve => { let i = new Image(); i.onload = () => { resolve(i); }; i.src = url; });
    }
    speedChanged() {
    }
    animateMe() {
        console.log('animateMe');
        // var canvas = (this.__canvas = new fabric.Canvas("c"));
        // canvas.setHeight(540);
        // canvas.setWidth(420);
        // txtSpeed = document.getElementById("speed");
        // var speed = 11;
        // var speedHalf = Math.floor(speed / 2);
        // var myImg = "http://cloud.bitflower.net/a/c.jpg";
        // var myImg2 = "http://cloud.bitflower.net/a/d.jpg";
        // var i1 = {};
        // var i2 = {};
        // var drillBit = new fabric.Image.fromURL(myImg, function(img) {
        //   img
        //     .scale(0.5).set({
        //       left: -90,
        //       top: 6
        //     })
        //     .setAngle(90)
        //     ;
        //   canvas.add(img);
        //   window.i1 = img;
        // });
        // var drillBit2 = new fabric.Image.fromURL(myImg2, function(img2) {
        //   img2
        //     .scale(0.5)
        //   .set({
        //     left: -135,
        //     top: 0
        //   })
        //     .setAngle(90)
        //     ;
        //   canvas.add(img2);
        //   window.i2 = img2;
        // });
        // var i = 0;
        // function animate() {
        //   i += 1;
        //   if (i <= speedHalf) {
        //     window.i1.opacity = 1;
        //   } else {
        //     window.i1.opacity = 0;
        //   }
        //   if (i > speedHalf) {
        //     window.i2.opacity = 1;
        //   } else {
        //     window.i2.opacity = 0;
        //   }
        //   if (i === speed) {
        //     i = 0;
        //   }
        //   canvas.renderAll();
        //   fabric.util.requestAnimFrame(animate);
        // }
        // setTimeout(animate, 1000);
        // txtSpeed.onchange = function() {
        //   console.info("blub");
        //   speed = parseInt(txtSpeed.value);
        //   speedHalf = Math.floor(speed / 2);
        //   i = 0;
        // };
    }
};
__decorate([
    Prop()
], StereoScope.prototype, "first", void 0);
__decorate([
    Prop()
], StereoScope.prototype, "last", void 0);
StereoScope = __decorate([
    Component({
        tag: 'stereo-scope',
        styleUrl: 'stereo-scope.scss'
    })
], StereoScope);
export { StereoScope };
