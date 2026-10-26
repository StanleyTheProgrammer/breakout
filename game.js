import * as pc from "playcanvas";

// Wait for the HTML page to fully load
window.addEventListener('load', () => {
    
    const canvas = document.getElementById("app");
    
    // Create the app and add keyboard support for later
    const app = new pc.Application(canvas, {
        keyboard: new pc.Keyboard(document.body)
    });

    app.start();
    app.resizeCanvas(); 

    // 1. Create the Box
    const box = new pc.Entity('Box');
    box.addComponent('model', { type: 'box' });
    app.root.addChild(box);

    // 2. Create the Camera
    const camera = new pc.Entity('Camera');
    camera.addComponent('camera', { clearColor: new pc.Color(0.1, 0.1, 0.1) });
    camera.setPosition(0, 2, 5); 
    camera.lookAt(0, 0, 0);      
    app.root.addChild(camera);

    // 3. Create the Light
    const light = new pc.Entity('Light');
    light.addComponent('light');
    light.setEulerAngles(45, 30, 0); 
    app.root.addChild(light);

});
