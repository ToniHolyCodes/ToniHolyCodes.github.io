const app = new PIXI.Application();
await app.init({ width: 780, height: 420 });
document.getElementById("screen").appendChild(app.canvas);
await PIXI.Assets.load("assets/screen.png");

await PIXI.Assets.load("assets/betty.png");
await PIXI.Assets.load("assets/erica.png");
await PIXI.Assets.load("assets/sarah.png");

await PIXI.Assets.load("assets/up.png");
await PIXI.Assets.load("assets/down.png");
await PIXI.Assets.load("assets/left.png");
await PIXI.Assets.load("assets/right.png");

await PIXI.Assets.load("assets/bar.png");

await PIXI.Assets.load("assets/ArcadeAlternate.xml");

const bgData = { 
    "frames":{
        "screen0.png":{
            "frame":{"x":0,"y":0,"w":3950,"h":2140},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":3950,"h":2140},
            "sourceSize":{"w":3950,"h":2140}},
        "screen1.png":{
            "frame":{"x":3950,"y":0,"w":3950,"h":2140},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":3950,"h":2140},
            "sourceSize":{"w":3950,"h":2140}},
        "screen2.png":{
            "frame":{"x":0,"y":2140,"w":3950,"h":2140},
            "rotated":false,"trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":3950,"h":2140},
            "sourceSize":{"w":3950,"h":2140}},
        "screen3.png":{
            "frame":{"x":3950,"y":2140,"w":3950,"h":2140},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":3950,"h":2140},
            "sourceSize":{"w":3950,"h":2140}},
        "screen4.png":{
            "frame":{"x":0,"y":4280,"w":3950,"h":2140},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":3950,"h":2140},
            "sourceSize":{"w":3950,"h":2140}
        }
    },
    
    "meta":{
        "app":"https://github.com/piskelapp/piskel/",
        "version":"1.0",
        "image":"assets/screen.png",
        "format":"RGBA8888",
        "size":{"w":7900,"h":6420}
    },
    animations: {
        screen: ['screen0.png','screen1.png','screen2.png','screen3.png','screen4.png']
    }
};
let bgStates = new PIXI.Spritesheet(
    PIXI.Texture.from(bgData.meta.image),
    bgData
);

await bgStates.parse();

const background = new PIXI.AnimatedSprite(bgStates.animations.screen);

background.animationSpeed = 0.1666;
background.scale.set(0.2,0.2);
app.stage.addChild(background);
background.play();

background.onLoop = function (){
    background.stop();
    background.currentFrame=4;
    menu();
};

const bData = {
    "frames":{
        "betty0.png":{
            "frame":{"x":0,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty1.png":{
            "frame":{"x":770,"y":0,"w":770,"h":770}
            ,"rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty2.png":{
            "frame":{"x":1540,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty3.png":{
            "frame":{"x":2310,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty4.png":{
            "frame":{"x":3080,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty5.png":{
            "frame":{"x":3850,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty6.png":{
            "frame":{"x":4620,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty7.png":{
            "frame":{"x":0,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty8.png":{
            "frame":{"x":770,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty9.png":{
            "frame":{"x":1540,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty10.png":{
            "frame":{"x":2310,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty11.png":{
            "frame":{"x":3080,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty12.png":{
            "frame":{"x":3850,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty13.png":{
            "frame":{"x":4620,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty14.png":{
            "frame":{"x":0,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty15.png":{
            "frame":{"x":770,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty16.png":{
            "frame":{"x":1540,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty17.png":{
            "frame":{"x":2310,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty18.png":{
            "frame":{"x":3080,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty19.png":{
            "frame":{"x":3850,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty20.png":{
            "frame":{"x":4620,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty21.png":{
            "frame":{"x":0,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty22.png":{
            "frame":{"x":770,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty23.png":{
            "frame":{"x":1540,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty24.png":{
            "frame":{"x":2310,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty25.png":{
            "frame":{"x":3080,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty26.png":{
            "frame":{"x":3850,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty27.png":{
            "frame":{"x":4620,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty28.png":{
            "frame":{"x":0,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty29.png":{
            "frame":{"x":770,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty30.png":{
            "frame":{"x":1540,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty31.png":{
            "frame":{"x":2310,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty32.png":{
            "frame":{"x":3080,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty33.png":{
            "frame":{"x":3850,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty34.png":{
            "frame":{"x":4620,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty35.png":{
            "frame":{"x":0,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty36.png":{
            "frame":{"x":770,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty37.png":{
            "frame":{"x":1540,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty38.png":{
            "frame":{"x":2310,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty39.png":{
            "frame":{"x":3080,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty40.png":{
            "frame":{"x":3850,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty41.png":{
            "frame":{"x":4620,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty42.png":{
            "frame":{"x":0,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty43.png":{
            "frame":{"x":770,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty44.png":{
            "frame":{"x":1540,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty45.png":{
            "frame":{"x":2310,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty46.png":{
            "frame":{"x":3080,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "betty47.png":{
            "frame":{"x":3850,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}}
    },

    "meta":{
        "app":"https://github.com/piskelapp/piskel/",
        "version":"1.0",
        "image":"assets/betty.png",
        "format":"RGBA8888",
        "size":{"w":5390,"h":5390}
    },

    animations: {
        betty: ["betty0.png","betty1.png","betty2.png","betty3.png",
            "betty4.png","betty5.png","betty6.png","betty7.png",
            "betty8.png","betty9.png","betty10.png","betty11.png",
            "betty12.png","betty13.png","betty14.png","betty15.png",
            "betty16.png","betty17.png","betty18.png","betty19.png",
            "betty20.png","betty21.png","betty22.png","betty23.png",
            "betty24.png","betty25.png","betty26.png","betty27.png",
            "betty28.png","betty29.png","betty30.png","betty31.png",
            "betty32.png","betty33.png","betty34.png","betty35.png",
            "betty36.png","betty37.png","betty38.png","betty39.png",
            "betty40.png","betty41.png","betty42.png","betty43.png",
            "betty44.png","betty45.png","betty46.png","betty47.png",
        ]
    }
};

let b = new PIXI.Spritesheet(
    PIXI.Texture.from(bData.meta.image),
    bData
);

const eData = {
    "frames":{
        "erica0.png":{
            "frame":{"x":0,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica1.png":{
            "frame":{"x":770,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica2.png":{
            "frame":{"x":1540,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica3.png":{
            "frame":{"x":2310,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica4.png":{
            "frame":{"x":3080,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica5.png":{
            "frame":{"x":3850,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica6.png":{
            "frame":{"x":4620,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica7.png":{
            "frame":{"x":0,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica8.png":{
            "frame":{"x":770,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica9.png":{
            "frame":{"x":1540,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica10.png":{
            "frame":{"x":2310,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica11.png":{
            "frame":{"x":3080,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica12.png":{
            "frame":{"x":3850,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica13.png":{
            "frame":{"x":4620,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica14.png":{
            "frame":{"x":0,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica15.png":{
            "frame":{"x":770,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica16.png":{
            "frame":{"x":1540,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica17.png":{
            "frame":{"x":2310,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica18.png":{
            "frame":{"x":3080,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica19.png":{
            "frame":{"x":3850,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica20.png":{
            "frame":{"x":4620,"y":1540,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica21.png":{
            "frame":{"x":0,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica22.png":{
            "frame":{"x":770,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica23.png":{
            "frame":{"x":1540,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica24.png":{
            "frame":{"x":2310,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica25.png":{
            "frame":{"x":3080,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica26.png":{
            "frame":{"x":3850,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica27.png":{
            "frame":{"x":4620,"y":2310,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica28.png":{
            "frame":{"x":0,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica29.png":{
            "frame":{"x":770,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica30.png":{
            "frame":{"x":1540,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica31.png":{
            "frame":{"x":2310,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica32.png":{
            "frame":{"x":3080,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica33.png":{
            "frame":{"x":3850,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica34.png":{
            "frame":{"x":4620,"y":3080,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica35.png":{
            "frame":{"x":0,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica36.png":{
            "frame":{"x":770,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica37.png":{
            "frame":{"x":1540,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica38.png":{
            "frame":{"x":2310,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica39.png":{
            "frame":{"x":3080,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica40.png":{
            "frame":{"x":3850,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica41.png":{
            "frame":{"x":4620,"y":3850,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica42.png":{
            "frame":{"x":0,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica43.png":{
            "frame":{"x":770,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica44.png":{
            "frame":{"x":1540,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica45.png":{
            "frame":{"x":2310,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica46.png":{
            "frame":{"x":3080,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "erica47.png":{
            "frame":{"x":3850,"y":4620,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}}
        },
        
    "meta":{
        "app":"https://github.com/piskelapp/piskel/",
        "version":"1.0",
        "image":"assets/erica.png",
        "format":"RGBA8888",
        "size":{"w":5390,"h":5390}
    },

    animations: {
        erica: ["erica0.png","erica1.png","erica2.png","erica3.png",
                "erica4.png","erica5.png","erica6.png","erica7.png",
                "erica8.png","erica9.png","erica10.png","erica11.png",
                "erica12.png","erica13.png","erica14.png","erica15.png",
                "erica16.png","erica17.png","erica18.png","erica19.png",
                "erica20.png","erica21.png","erica22.png","erica23.png",
                "erica24.png","erica25.png","erica26.png","erica27.png",
                "erica28.png","erica29.png","erica30.png","erica31.png",
                "erica32.png","erica33.png","erica34.png","erica35.png",
                "erica36.png","erica37.png","erica38.png","erica39.png",
                "erica40.png","erica41.png","erica42.png","erica43.png",
                "erica44.png","erica45.png","erica46.png","erica47.png",
        ]
    }
};
 
let e = new PIXI.Spritesheet(
    PIXI.Texture.from(eData.meta.image),
    eData
);

const sData = {
    "frames":{
        "sarah0.png":{
            "frame":{"x":0,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah1.png":{
            "frame":{"x":770,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah2.png":{
            "frame":{"x":1540,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah3.png":{
            "frame":{"x":2310,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah4.png":{
            "frame":{"x":3080,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah5.png":{
            "frame":{"x":3850,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah6.png":{
            "frame":{"x":4620,"y":0,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah7.png":{
            "frame":{"x":0,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah8.png":{
            "frame":{"x":770,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah9.png":{
            "frame":{"x":1540,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah10.png":{
            "frame":{"x":2310,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah11.png":{
            "frame":{"x":3080,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah12.png":{
            "frame":{"x":3850,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
        "sarah13.png":{
            "frame":{"x":4620,"y":770,"w":770,"h":770},
            "rotated":false,
            "trimmed":false,
            "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
            "sourceSize":{"w":770,"h":770}},
            "sarah14.png":{
                "frame":{"x":0,"y":1540,"w":770,"h":770},
                "rotated":false,
                "trimmed":false,
                "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                "sourceSize":{"w":770,"h":770}},
            "sarah15.png":{
                "frame":{"x":770,"y":1540,"w":770,"h":770},
                "rotated":false,
                "trimmed":false,
                "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                "sourceSize":{"w":770,"h":770}},
                "sarah16.png":{
                    "frame":{"x":1540,"y":1540,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah17.png":{
                    "frame":{"x":2310,"y":1540,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah18.png":{
                    "frame":{"x":3080,"y":1540,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah19.png":{
                    "frame":{"x":3850,"y":1540,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah20.png":{
                    "frame":{"x":4620,"y":1540,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah21.png":{
                    "frame":{"x":0,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah22.png":{
                    "frame":{"x":770,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah23.png":{
                    "frame":{"x":1540,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah24.png":{
                    "frame":{"x":2310,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah25.png":{
                    "frame":{"x":3080,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah26.png":{
                    "frame":{"x":3850,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah27.png":{
                    "frame":{"x":4620,"y":2310,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah28.png":{
                    "frame":{"x":0,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah29.png":{
                    "frame":{"x":770,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah30.png":{
                    "frame":{"x":1540,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah31.png":{
                    "frame":{"x":2310,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah32.png":{
                    "frame":{"x":3080,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah33.png":{
                    "frame":{"x":3850,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah34.png":{
                    "frame":{"x":4620,"y":3080,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah35.png":{
                    "frame":{"x":0,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah36.png":{
                    "frame":{"x":770,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah37.png":{
                    "frame":{"x":1540,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah38.png":{
                    "frame":{"x":2310,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah39.png":{
                    "frame":{"x":3080,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah40.png":{
                    "frame":{"x":3850,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah41.png":{
                    "frame":{"x":4620,"y":3850,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah42.png":{
                    "frame":{"x":0,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah43.png":{
                    "frame":{"x":770,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah44.png":{
                    "frame":{"x":1540,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah45.png":{
                    "frame":{"x":2310,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah46.png":{
                    "frame":{"x":3080,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}},
                "sarah47.png":{
                    "frame":{"x":3850,"y":4620,"w":770,"h":770},
                    "rotated":false,
                    "trimmed":false,
                    "spriteSourceSize":{"x":0,"y":0,"w":770,"h":770},
                    "sourceSize":{"w":770,"h":770}}},
                    
            "meta":{
                "app":"https://github.com/piskelapp/piskel/",
                "version":"1.0",
                "image":"assets/sarah.png",
                "format":"RGBA8888",
                "size":{"w":5390,"h":5390}},
            
        animations: {
            sarah: ["sarah0.png","sarah1.png","sarah2.png","sarah3.png",
                "sarah4.png","sarah5.png","sarah6.png","sarah7.png",
                "sarah8.png","sarah9.png","sarah10.png","sarah11.png",
                "sarah12.png","sarah13.png","sarah14.png","sarah15.png",
                "sarah16.png","sarah17.png","sarah18.png","sarah19.png",
                "sarah20.png","sarah21.png","sarah22.png","sarah23.png",
                "sarah24.png","sarah25.png","sarah26.png","sarah27.png",
                "sarah28.png","sarah29.png","sarah30.png","sarah31.png",
                "sarah32.png","sarah33.png","sarah34.png","sarah35.png",
                "sarah36.png","sarah37.png","sarah38.png","sarah39.png",
                "sarah40.png","sarah41.png","sarah42.png","sarah43.png",
                "sarah44.png","sarah45.png","sarah46.png","sarah47.png",
        ]
        }
};

let s = new PIXI.Spritesheet(
    PIXI.Texture.from(sData.meta.image),
    sData
);

await b.parse();
await e.parse();
await s.parse();

const gameBox = new PIXI.Container();
app.stage.addChild(gameBox);
const worldBox = new PIXI.Container();
app.stage.addChild(worldBox);

const betty = new PIXI.AnimatedSprite(b.animations.betty);
betty.anchor.set(0.125,0.2);
betty.currentFrame=28;

const erica = new PIXI.AnimatedSprite(e.animations.erica);
erica.anchor.set(0.125,0.2);
erica.currentFrame=28;

const sarah = new PIXI.AnimatedSprite(s.animations.sarah);
sarah.anchor.set(0.125,0.2);
sarah.currentFrame=28;

let dancer = 0;
let track = 0;
const DANCERS = 3;
let shuffle, score, state;
//songs have a song (.mp3), a dance
// (array of moves in Betty's move set),
// and a sequence (scrolling arrow map).
let song = "assets/demo.mp3";
let duration = 94;
let flash = 50;
let dance;
let sequence;
dance = [29,32,29,24,22,
    24,22,15,18,20,
    15,18,20,7,2,
    24,22,15,18,20,
    29,24,22,24,22,
    15,18,20,7,2,
    29,32,29,24,22,
    29,32,29,24,22,
    29,32,29,24,22,
    24,22,15,18,20,
    15,18,20,7,2,
    29,32,29,24,22,
    29,32,29,24,22,
    29,32,29,24,22,
    24,22,15,18,20,
    29,24,22,24,22,
    15,18,20,7,2,
    29,32,29,24,22,
    29,32,29,24,22,
    29,32,29,24,22,
    24,22,15,18,20,
    7,2];
sequence = [[3,5320],[0,5300],[2,5250],[1,5200],[3,5150],
[3,5100],[0,5050],[2,5000],[1,4950],[3,4900],
[3,4850],[0,4800],[2,4750],[1,4700],[3,4650],
[3,4620],[0,4600],[2,4500],[1,4450],[3,4400],
[0,4350],[2,4300],[1,4250],[3,4200],[0,4150],
[3,4100],[0,4050],[2,4000],[1,3950],[3,3900],
[3,3850],[0,3800],[2,3750],[1,3700],[3,3650],
[3,3600],[0,3550],[2,3500],[1,3450],[3,3400],
[3,3350],[0,3300],[2,3250],[1,3200],[3,3150],
[3,3100],[0,3050],[2,3000],[1,2950],[3,2900],
[3,2850],[0,2800],[2,2750],[1,2700],[3,2650],
[3,2620],[0,2600],[2,2500],[1,2450],[3,2400],
[0,2350],[2,2300],[1,2250],[3,2200],[0,2150],
[3,2100],[0,2050],[2,2000],[1,1950],[3,1900],
[3,1850],[0,1800],[2,1750],[1,1700],[3,1650],
[3,1600],[0,1550],[2,1500],[1,1450],[3,1400],
[3,1350],[0,1300],[2,1250],[1,1200],[3,1150],
[3,1100],[0,1050],[2,1000],[1,950],[3,900],
[3,850],[0,800],[2,750],[1,700],[3,650],
[3,620],[0,600],[2,500],[1,450],[3,400],
[0,350],[2,300],[1,250],[3,200],[0,150],
[2,100],[1,50]];

const bitmapFontText = new PIXI.BitmapText({
    text: "Welcome to Betty's Cheer-Off!",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 44,
        align: 'centre',
    },
});

bitmapFontText.x = 70;
bitmapFontText.y = 40;

app.stage.addChild(bitmapFontText);

const cInfo = new PIXI.BitmapText({
    text: "Betty Weir",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 32,
        align: 'left',
    },
});
cInfo.x = 70;
cInfo.y = 120;

const cBio = new PIXI.BitmapText({
    text: "Ready to\ncheer!",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 24,
        align: 'left',
    },
});
cBio.x = 70;
cBio.y = 160;

const sInfo = new PIXI.BitmapText({
    text: "Demo Track-",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 24,
        align: 'left',
    },
});
sInfo.x = 70;
sInfo.y = 280;

const sBio = new PIXI.BitmapText({
    text: "More songs\ncoming soon",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 24,
        align: 'left',
    },
});
sBio.x = 70;
sBio.y = 310;

const instr = new PIXI.BitmapText({
    text: "Select your cheer-leader using\nthe left & right arrow keys,\n \nAnd your song with\nthe up & down keys,\n \nThen hit enter to play",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 24,
        align: 'right',
    },
});
instr.x = 360;
instr.y = 150;

function menu(){
    state = true;
    betty.renderable = true;
    erica.renderable = true;
    sarah.renderable = true;
    //let the user pick a song/difficulty/character
    document.addEventListener('keydown', function(event) {
        if (((event.keyCode == 39) || (event.keyCode == 68))
        && (state == true)) {
            if (dancer < DANCERS - 1) {
                dancer += 1;
            }
            else {
                dancer = 0;
            }
        }
        if (((event.keyCode == 65) || (event.keyCode == 37))
            && (state == true)) {
            if (dancer > 0) {
                dancer -= 1;
            }
            else{
                dancer = DANCERS - 1;
            }
        }
        else if ((event.keyCode == 13) && (state == true)) {
            app.stage.removeChild(instr);
            gameBox.removeChild(cInfo);
            gameBox.removeChild(cBio);
            gameBox.removeChild(sInfo);
            gameBox.removeChild(sBio);
            bitmapFontText.text = "Score:";
            score = 0;
            const cs = new PIXI.Ticker;
            cs.start();
            cs.add((delta) => { entrance(delta,cs) });
            cheer(ticker);
        }
    }, true);

    shuffle = 0;

    app.stage.addChild(instr);

    gameBox.addChild(cInfo);
    gameBox.addChild(cBio);
    gameBox.addChild(sInfo);
    gameBox.addChild(sBio);

    const ticker = new PIXI.Ticker;
    ticker.add((delta) => { menuLoop(delta) });
    ticker.start();
}

function menuLoop(delta){
    if (state){
        switch(dancer){
            case 0:
                cInfo.text = "Betty Weir";
                cBio.text = "Ready to\ncheer!";
                worldBox.removeChild(erica);
                worldBox.removeChild(sarah);
                worldBox.addChild(betty);
                break;
    
            case 1:
                cInfo.text = "Erica Jones";
                cBio.text = "Rises to the\nchallenge";
                worldBox.removeChild(betty);
                worldBox.removeChild(sarah);
                worldBox.addChild(erica);
                break;

            case 2:
                cInfo.text = "Sarah Fox";
                cBio.text = "Approaches\nthe floor";
                worldBox.removeChild(betty);
                worldBox.removeChild(erica);
                worldBox.addChild(sarah);
                break;
        }

        switch(track) {
            case 0:
                sInfo.text = "Demo Track-";
                sBio.text = "More songs\ncoming soon";
                dance = [29,32,29,24,22,
                    24,22,15,18,20,
                    15,18,20,7,2,
                    24,22,15,18,20,
                    29,24,22,24,22,
                    15,18,20,7,2,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    24,22,15,18,20,
                    15,18,20,7,2,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    24,22,15,18,20,
                    29,24,22,24,22,
                    15,18,20,7,2,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    29,32,29,24,22,
                    24,22,15,18,20,
                    7,2];

                sequence = [[3,5320],[0,5300],[2,5250],[1,5200],[3,5150],
                    [3,5100],[0,5050],[2,5000],[1,4950],[3,4900],
                    [3,4850],[0,4800],[2,4750],[1,4700],[3,4650],
                    [3,4620],[0,4600],[2,4500],[1,4450],[3,4400],
                    [0,4350],[2,4300],[1,4250],[3,4200],[0,4150],
                    [3,4100],[0,4050],[2,4000],[1,3950],[3,3900],
                    [3,3850],[0,3800],[2,3750],[1,3700],[3,3650],
                    [3,3600],[0,3550],[2,3500],[1,3450],[3,3400],
                    [3,3350],[0,3300],[2,3250],[1,3200],[3,3150],
                    [3,3100],[0,3050],[2,3000],[1,2950],[3,2900],
                    [3,2850],[0,2800],[2,2750],[1,2700],[3,2650],
                    [3,2620],[0,2600],[2,2500],[1,2450],[3,2400],
                    [0,2350],[2,2300],[1,2250],[3,2200],[0,2150],
                    [3,2100],[0,2050],[2,2000],[1,1950],[3,1900],
                    [3,1850],[0,1800],[2,1750],[1,1700],[3,1650],
                    [3,1600],[0,1550],[2,1500],[1,1450],[3,1400],
                    [3,1350],[0,1300],[2,1250],[1,1200],[3,1150],
                    [3,1100],[0,1050],[2,1000],[1,950],[3,900],
                    [3,850],[0,800],[2,750],[1,700],[3,650],
                    [3,620],[0,600],[2,500],[1,450],[3,400],
                    [0,350],[2,300],[1,250],[3,200],[0,150],
                    [2,100],[1,50]];
            break;
        }
    }

}

function entrance(delta, cs){
    shuffle += delta.deltaTime;
    switch(dancer) {
        case 0:
            erica.renderable = false;
            sarah.renderable = false;
            if (betty.x < 250) {
                betty.x += 1;
                if (shuffle >= 6) {
                    switch (betty.currentFrame) {
                        case 28:
                            betty.currentFrame = 29;
                            shuffle = 0;
                            break;
                        case 29:
                            betty.currentFrame = 30;
                            shuffle = 0;
                            break;
                        case 30:
                            betty.currentFrame = 31;
                            shuffle = 0;
                            break;
                        case 31:
                            betty.currentFrame = 28;
                            shuffle = 0;
                            break;
                    }
                }
            }
            else {
                shuffle = 0;
                cs.destroy();
            }
            break;
    case 1:
        betty.renderable = false;
        sarah.renderable = false;
        if (erica.x < 250) {
            erica.x += 1;
            if (shuffle >= 6) {
                switch (erica.currentFrame) {
                    case 28:
                        erica.currentFrame = 29;
                        shuffle = 0;
                        break;
                    case 29:
                        erica.currentFrame = 30;
                        shuffle = 0;
                        break;
                    case 30:
                        erica.currentFrame = 31;
                        shuffle = 0;
                        break;
                    case 31:
                        erica.currentFrame = 28;
                        shuffle = 0;
                        break;
                }
            }
        }
        else {
            shuffle = 0;
            cs.destroy();
        }
        break;

        case 2:
        betty.renderable = false;
        erica.renderable = false;
        if (sarah.x < 250) {
            sarah.x += 1;
            if (shuffle >= 6) {
                switch (sarah.currentFrame) {
                    case 28:
                        sarah.currentFrame = 29;
                        shuffle = 0;
                        break;
                    case 29:
                        sarah.currentFrame = 30;
                        shuffle = 0;
                        break;
                    case 30:
                        sarah.currentFrame = 31;
                        shuffle = 0;
                        break;
                    case 31:
                        sarah.currentFrame = 28;
                        shuffle = 0;
                        break;
                }
            }
        }
        else {
            shuffle = 0;
            cs.destroy();
        }
        break;
    }
}

const rank = new PIXI.BitmapText({
    text: "",
    style: {
        fontFamily: 'ArcadeAlternate',
        fontSize: 32,
        align: 'left',
    },
});

function cheer(){
    airtime = 0;
    rank.x = 400;
    rank.y = 50;
    //play the song
    state = false;
    let audio = new Audio(song);
    audio.play();
    const bar = PIXI.Sprite.from("assets/bar.png");
    bar.scale.set(0.7);
    bar.x = 50;
    bar.y = 300;
    gameBox.addChild(bar);
    const songTicker = new PIXI.Ticker;
    songTicker.add((delta) => { moves(delta,bar,songTicker) });
    songTicker.start();
}

let airtime = 0;
let step = 0;
let onscreen = [];
let keyLock = false;

function moves(delta,bar,songTicker){
    state = false;
    keyLock = false;
    airtime += delta.deltaTime;
    flash += delta.deltaTime;
    let i=sequence.length;
    document.addEventListener('keydown', function(event) {
        if (((event.keyCode == 65) || (event.keyCode == 37)
        || (event.keyCode == 39) || (event.keyCode == 68)
        || (event.keyCode == 38) || (event.keyCode == 87)
        || (event.keyCode == 40) || (event.keyCode == 83))
        && !(state)
        && !(keyLock)) {
            switch(dancer){
                case 0:
                    keyLock = true;
                    if ((bar.y < onscreen[0].y) && (onscreen[0].y < bar.y + 40)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 50;
                            betty.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Perfect!";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 10 < onscreen[0].y) && (onscreen[0].y < bar.y + 50)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 20;
                            betty.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Great";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 20 < onscreen[0].y) && (onscreen[0].y < bar.y + 60)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 10;
                            betty.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Good";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 40 < onscreen[0].y) && (onscreen[0].y < bar.y + 80)) {
                        rank.text = "Almost";
                        onscreen[0].destroy();
                        onscreen.shift();
                        betty.currentFrame = dance.pop();
                    }
                    else {
                        rank.text = "Bad";
                    }
                    break;

                case 1:
                    keyLock = true;
                    if ((bar.y < onscreen[0].y) && (onscreen[0].y < bar.y + 40)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 50;
                            erica.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Perfect!";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 10 < onscreen[0].y) && (onscreen[0].y < bar.y + 50)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 20;
                            erica.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Great";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 20 < onscreen[0].y) && (onscreen[0].y < bar.y + 60)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 10;
                            erica.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Good";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 40 < onscreen[0].y) && (onscreen[0].y < bar.y + 80)) {
                        rank.text = "Almost";
                        onscreen[0].destroy();
                        onscreen.shift();
                        erica.currentFrame = dance.pop();
                    }
                    else {
                        rank.text = "Bad";
                    }
                    break;

                    case 2:
                    keyLock = true;
                    if ((bar.y < onscreen[0].y) && (onscreen[0].y < bar.y + 40)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 50;
                            sarah.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Perfect!";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 10 < onscreen[0].y) && (onscreen[0].y < bar.y + 50)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 20;
                            sarah.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Great";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 20 < onscreen[0].y) && (onscreen[0].y < bar.y + 60)) {
                        if (((onscreen[0].label == "l") && ((event.keyCode == 65) || (event.keyCode == 37))) ||
                        ((onscreen[0].label == "r") && ((event.keyCode == 39) || (event.keyCode == 68))) ||
                        ((onscreen[0].label == "u") && ((event.keyCode == 38) || (event.keyCode == 87))) ||
                        ((onscreen[0].label == "d") && ((event.keyCode == 40) || (event.keyCode == 83)))) {
                            score += 10;
                            sarah.currentFrame = dance.pop();
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Good";
                            bitmapFontText.text = "Score: " + score.toString();
                        }
                        else{
                            onscreen[0].destroy();
                            onscreen.shift();
                            rank.text = "Oops";
                        }
                    }
                    else if ((bar.y - 40 < onscreen[0].y) && (onscreen[0].y < bar.y + 80)) {
                        rank.text = "Almost";
                        onscreen[0].destroy();
                        onscreen.shift();
                        sarah.currentFrame = dance.pop();
                    }
                    else {
                        rank.text = "Bad";
                    }
                    break;
            }
            gameBox.addChild(rank); 
        }
    }, true);

    for (i;i>0;i--){
        if (sequence[i-1][1] <= airtime){
            const note = sequence.pop();
            switch(note[0]){
                case 0:
                    const n = PIXI.Sprite.from("assets/left.png");
                    n.label = "l";
                    onscreen.push(n);
                    onscreen[onscreen.length-1].scale.set(0.2);
                    onscreen[onscreen.length-1].x = 80;
                    break;
                case 1:
                    const m = PIXI.Sprite.from("assets/up.png");
                    m.label = "u";
                    onscreen.push(m);
                    onscreen[onscreen.length-1].scale.set(0.2);
                    onscreen[onscreen.length-1].x = 130;
                    break;
                case 2:
                    const v = PIXI.Sprite.from("assets/down.png");
                    v.label = "d";
                    onscreen.push(v);
                    onscreen[onscreen.length-1].scale.set(0.2);
                    onscreen[onscreen.length-1].x = 180;
                    break;
                case 3:
                    const w = PIXI.Sprite.from("assets/right.png");
                    w.label = "r";
                    onscreen.push(w);
                    onscreen[onscreen.length-1].scale.set(0.2);
                    onscreen[onscreen.length-1].x = 230;
                    break;
            }
            gameBox.addChild(onscreen[onscreen.length-1]);
        }
    }

    let shifts = 0;
    for (let j=0;j<onscreen.length;j++){
        onscreen[j].y += 1;
        console.log(airtime);
        if (onscreen[j].y> 380){
            gameBox.removeChild(onscreen[j]);
            shifts += 1;
        }
    }

    for (let j=0;j<shifts;j++){
        dance.pop();
        rank.text = "Miss!";
        gameBox.addChild(rank); 
        onscreen.shift();
    }

    if (flash >= 50){
        gameBox.removeChild(rank);
        flash = 0;
    }

    if (airtime/60 > duration){
        const cts = new PIXI.Ticker;
        gameBox.removeChild(bar);
        cts.add((delta) => { exit(delta,cts) });
        cts.start();
        songTicker.destroy();
        menu();
    }

}

function exit(delta, cts){
    shuffle += delta.deltaTime;
    switch(dancer) {
        case 0:
            if (betty.x > 0) {
                betty.x -= 1;
                if (shuffle >= 6) {
                    switch (betty.currentFrame) {
                        case 28:
                            betty.currentFrame = 29;
                            shuffle = 0;
                            break;
                        case 29:
                            betty.currentFrame = 30;
                            shuffle = 0;
                            break;
                        case 30:
                            betty.currentFrame = 31;
                            shuffle = 0;
                            break;
                        case 31:
                            betty.currentFrame = 28;
                            shuffle = 0;
                            break;
                        default:
                            betty.currentFrame=28;
                    }
                }
            }
            else {
                shuffle = 0;
                cts.destroy();
            }
            break;
    case 1:
        if (erica.x > 0) {
            erica.x -= 1;
            if (shuffle >= 6) {
                switch (erica.currentFrame) {
                    case 28:
                        erica.currentFrame = 29;
                        shuffle = 0;
                        break;
                    case 29:
                        erica.currentFrame = 30;
                        shuffle = 0;
                        break;
                    case 30:
                        erica.currentFrame = 31;
                        shuffle = 0;
                        break;
                    case 31:
                        erica.currentFrame = 28;
                        shuffle = 0;
                        break;
                    default:
                        erica.currentFrame=28;
                }
            }
        }
        else {
            shuffle = 0;
            cts.destroy();
        }
        break;

        case 2:
        if (sarah.x > 0) {
            sarah.x -= 1;
            if (shuffle >= 6) {
                switch (sarah.currentFrame) {
                    case 28:
                        sarah.currentFrame = 29;
                        shuffle = 0;
                        break;
                    case 29:
                        sarah.currentFrame = 30;
                        shuffle = 0;
                        break;
                    case 30:
                        sarah.currentFrame = 31;
                        shuffle = 0;
                        break;
                    case 31:
                        sarah.currentFrame = 28;
                        shuffle = 0;
                        break;
                    default:
                        sarah.currentFrame=28;
                }
            }
        }
        else {
            shuffle = 0
            cts.destroy();
        }
        break;
    }
}

function clean(){
    //cull assets
}
