import * as pc from "playcanvas";

const canvas = document.getElementById("app")
const app = new pc.Application(canvas);
app.start();
import * as pc from "playcanvas";

const canvas = document.getElementById("app");
const app = new pc.Application(canvas);

app.start();
app.resizeCanvas(); 

const box = new pc.Entity('Box');
box.addComponent('model', { type: 'box' });
app.root.addChild(box);

const camera = new pc.Entity('Camera');
camera.addComponent('camera');
camera.setPosition(0, 2, 5);
camera.lookAt(0, 0, 0);
app.root.addChild(camera);

const light = new pc.Entity('Light');
light.addComponent('light');
light.setEulerAngles(45, 30, 0);
app.root.addChild(light);

const box = new pc.Entity('Box');
box.addComponent('model', { type: 'box' });
app.root.addChild(box);

const camera = new pc.Entity('Camera');
camera.addComponent('camera');
camera.setPosition(0, 2, 5); // Move it up 2, back 5
camera.lookAt(0, 0, 0);      // Look at the box
app.root.addChild(camera);

const light = new pc.Entity('Light');
light.addComponent('light');
light.setEulerAngles(45, 30, 0); // Tilt it so it hits the box
app.root.addChild(light);
