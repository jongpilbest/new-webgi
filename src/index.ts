import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    AudioLoader,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    CameraViewPlugin,
CameraView,
    BloomPlugin,
  
GLTFAnimationPlugin,
    addBasePlugins,
    TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

    IViewerPlugin,
    MeshBasicMaterial2,
    Color,
    csgOperations,

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import "./styles.css";
import gsap from "gsap";
import { GUI } from 'dat.gui'
import { ScrollTrigger } from "gsap/all";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const click_white :any  = document.getElementById('third-white') as HTMLCanvasElement;

const click_black: any = document.getElementById('third-black') as HTMLCanvasElement;

const click_red: any = document.getElementById('third-red') as HTMLCanvasElement;

const click_blue: any = document.getElementById('third-blue') as HTMLCanvasElement;

const click_green: any = document.getElementById('third-green') as HTMLCanvasElement;

  
    
var elem: any = document.getElementById('webgi-canvas-container') as HTMLDivElement | null 
async function setupViewer(){

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
     // useRgbm: false,
        
    })
    await viewer.addPlugin(CameraViewPlugin)
    const camViewPlugin: any = viewer.getPlugin(CameraViewPlugin)
    console.log(camViewPlugin,'?????')
    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin)
    const camera = viewer.scene.activeCamera
    //const position = camera.position
    //const target = camera.target
  
    // Add a popup(in HTML) with download progress when any asset is downloading.
   await viewer.addPlugin(AssetManagerBasicPopupPlugin)

  //   await viewer.addPlugin(GBufferPlugin)
   // await viewer.addPlugin(new ProgressivePlugin(32))
   // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    //await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
   // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
   // await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)

    // or use this to add all main ones at once.
    await addBasePlugins(viewer)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin)

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline()

    await manager.addFromPath("./assets/new-main.glb")

    // Load an environment map if not set in the glb file
    // await viewer.scene.setEnvironment(
    //     await manager.importer!.importSinglePath<ITexture>(
    //         "./assets/environment.hdr"
    //     )
    // );

    // Add some UI for tweak and testing.
   const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
    // Add plugins to the UI to see their settings.
    uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)
 let needsUpdate = true;
    function onUpdate() {
        needsUpdate = true;
        viewer.renderer.resetShadows();

    }


//
    const out_color=manager.materials!.findMaterialsByName('airpods_max_silver_sides')[0] as MeshBasicMaterial2
    const inn_color=manager.materials!.findMaterialsByName('airpods_max_silver_earbuds')[0] as MeshBasicMaterial2
    const head_color = manager.materials!.findMaterialsByName('airpods_max_silver_white_top')[0] as MeshBasicMaterial2
    

const gui = new GUI()
const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(viewer.scene.modelObject.position, 'x', -5, 5, 0.01)
cubeFolder.add(viewer.scene.modelObject.position, 'y', -5, 5, 0.01)
cubeFolder.add(viewer.scene.modelObject.position, 'z', -5, 5, 0.01)
cubeFolder.open()
const cameraFolder = gui.addFolder('Camera')

cameraFolder.open()

let view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
  view._cameraViews=[view]
  view.position.set(-4.06, 1.33, 1.29)
  camViewPlugin._cameraViews.push(view)
    const controls :any = viewer.scene.activeCamera.controls;
   // controls.autoRotate = true; 

const options = viewer.scene.activeCamera.getCameraOptions();

    controls.rotateSpeed = 3;
    controls.autoRotateSpeed = 2;
viewer.scene.activeCamera.setCameraOptions(options);
    window.onresize = function (event) {
     
console.log(window.outerWidth,'화면 크기 ')

 }
 view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
  cubeFolder.add(view.position, 'x', -5, 5, 0.01)
 view.position.set(3.21, -0.42, 4.89)

    camViewPlugin._cameraViews.push ( view);
    console.log('첫번쟤',   camViewPlugin._cameraView)
 
 view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-3.46, -2.25, 4.08)


    camViewPlugin._cameraViews.push(view)
     
 view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-0.39, -0.43, -7.19)


    camViewPlugin._cameraViews.push(view)
         
 view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-2.22, 0.01, -0.76)


    camViewPlugin._cameraViews.push(view)

     view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-2.75, 0.53, 0.9)


    camViewPlugin._cameraViews.push(view)

        view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-5.93, -2.95, 0.082)


    camViewPlugin._cameraViews.push(view)
       view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-3.18, -0.07, -0.039)


    camViewPlugin._cameraViews.push(view)

    
 
       view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
 view.position.set(-0.55, -3.85, -0.18)


    camViewPlugin._cameraViews.push(view)
  
  
    //view.position.set(0.26, 0.85, 7.57)

    //camViewPlugin._cameraViews.push(view)
      //camViewPlugin.animDuration = 5000 
    camViewPlugin.animEase = 'circInOut'
    console.log(camViewPlugin._cameraViews,'확인좀')
  //await camViewPlugin.animateToView(camViewPlugin._cameraViews[0], 1000)
  //await camViewPlugin.animateToView(camViewPlugin._cameraViews[1], 5000)
    const camera_go = async function () {
      
         controls.autoRotate = false; 
        viewer.scene.modelObject.position.x = 0.12;
        viewer.scene.modelObject.position.y = 0.12;
        viewer.scene.modelObject.position.z = -0.65;
        

       //await camViewPlugin.animateToView(camViewPlugin._cameraViews[0], 2000)  
        

        
}
    
    
    
    const zoom_oo = function () {
        var check_widht = window.outerWidth;
        console.log('?뭐임',check_widht)
        
        if (check_widht > 300 && check_widht < 800) {
            options.zoom = 0.5;
          
        }
        else if (check_widht > 800 && check_widht < 1000) {
             options.zoom = 0.6;
        }
        else if (check_widht > 1000) {
            options.zoom = 0.6;
            console.log('왜?안됨')
        }
        viewer.scene.activeCamera.setCameraOptions(options);
       //viewer.scene.activeCamera.updateProjectionMatrix();
    } 
    window.onresize = function (event) {
    zoom_oo();
}
    const camera_go_second_2 = function () {
        console.log('Back')
    }
    const camera_go_second = async function () {
         
              elem.style.top = `${100}vh`
       options.zoom = 0.85;
                viewer.scene.activeCamera.setCameraOptions(options);;
      viewer.scene.modelObject.position.x = -0.21;
        viewer.scene.modelObject.position.y = 0.12;
        viewer.scene.modelObject.position.z = -0.65;
        console.log(camViewPlugin._cameraViews);
await camViewPlugin.animateToView(camViewPlugin._cameraViews[2], 1000) 

    }
    const camera_go_third = async function () {
       
         elem.style.top = `${200}vh`
        options.zoom = 0.85;
            viewer.scene.activeCamera.setCameraOptions(options);
         viewer.scene.modelObject.position.x =0;
        viewer.scene.modelObject.position.y = 0.12;
        viewer.scene.modelObject.position.z = -1;

await camViewPlugin.animateToView(camViewPlugin._cameraViews[1], 1000) 
    }
    const camera_go_six = async function () {
        options.zoom = 0.7;

       viewer.scene.modelObject.position.x = -1.34;
           viewer.scene.modelObject.position.z = -1.2;
   elem.style.top = `${400}vh`

await camViewPlugin.animateToView(camViewPlugin._cameraViews[4], 1000) 
    }
 const camera_go_eigth = async function () {
        options.zoom = 0.8;
  viewer.scene.activeCamera.setCameraOptions(options);
        //viewer.scene.modelObject.position.x = -1.34;
             viewer.scene.modelObject.position.z = 0.23;
   elem.style.top = `${510}vh`

await camViewPlugin.animateToView(camViewPlugin._cameraViews[5], 1000) 
    }


 const camera_go_seven = async function () {
        options.zoom = 0.7;
        viewer.scene.modelObject.position.z = -1.2;
        elem.style.top = `${450}vh`

await camViewPlugin.animateToView(camViewPlugin._cameraViews[4], 1000) 
    }


    const camera_go_first = async function () {
        options.zoom = 1;
           viewer.scene.activeCamera.setCameraOptions(options);
        elem.style.top = `${0}vh`;
          viewer.scene.modelObject.position.y = -0.2;
        /*
 viewer.scene.modelObject.position.x =0;
        viewer.scene.modelObject.position.y = -0.2;
        viewer.scene.modelObject.position.z = 0;
           //controls.autoRotate = true; 
       */
await camViewPlugin.animateToView(camViewPlugin._cameraViews[3], 1000) 
    }
    const camera_go_eve = async function () {
        options.zoom = 1.4;
          viewer.scene.activeCamera.setCameraOptions(options);
        elem.style.top = `${610}vh`;
          viewer.scene.modelObject.position.y = -0.39;

await camViewPlugin.animateToView(camViewPlugin._cameraViews[6], 1000) 

    }

    const camera_go_first_1 = async function () {
           options.zoom = 0.45;
        elem.style.top = `${320}vh`;
          viewer.scene.modelObject.position.y = -0.24;
        
 viewer.scene.modelObject.position.x =0;
       
        viewer.scene.modelObject.position.z = 0;
           //controls.autoRotate = true; 
       
await camViewPlugin.animateToView(camViewPlugin._cameraViews[3], 1000) 
    }
  

    const camera_go_dia = async function () {
  elem.style.top = `${710}vh`;

await camViewPlugin.animateToView(camViewPlugin._cameraViews[7], 1000) 

    }
    const camera_go_misu = async function () {
        options.zoom = 0.7;
        viewer.scene.modelObject.position.z= 0.17;
            viewer.scene.activeCamera.setCameraOptions(options);
  elem.style.top = `${810}vh`;

await camViewPlugin.animateToView(camViewPlugin._cameraViews[8], 1000) 

    }


    
    function stepScroll() {

         ScrollTrigger.create({
             trigger: '.first',
          start: "top center",
    end: "bottom bottom",
         markers: true,
             onEnter: () => {
            
             console.log('1번째 들어간다')
                 camera_go_first()
             },
         onEnterBack: () => {
                console.log('1번째 back')
             camera_go_first()
           
         }

         })
          ScrollTrigger.create({
             trigger: '.fifth',
          start: "top center",
    end: "bottom bottom",
         markers: true,
             onEnter: () => {
            
             console.log('4번째 들어간다')
                 camera_go_first_1()
             },
         onEnterBack: () => {
                console.log('4번째 back')
             camera_go_first_1()
           
         }

          })
        
         ScrollTrigger.create({
             trigger: '.misu',
          start: "top center",
    end: "bottom bottom",
         markers: true,
             onEnter: () => {
            
           
                 camera_go_misu()
             },
         onEnterBack: () => {
               
             camera_go_misu()
           
         }

         })
        
        
        
        
     ScrollTrigger.create({
  trigger: '.second',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => { camera_go_second() },
         onEnterBack: () => {
             
             camera_go_second()
              console.log('2번째 back')
         }

     })
        
        
         ScrollTrigger.create({
  trigger: '.seven',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => {  camera_go_six() },
         onEnterBack: () => {
             
              camera_go_six()
              console.log('2번째 back')
         }

     })
      
     ScrollTrigger.create({
  trigger: '.third',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => { camera_go_third() },
         onEnterBack: () => {
             
             camera_go_third()
            console.log('3번째 back')
         }

     })
 ScrollTrigger.create({
  trigger: '.six-1',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => { camera_go_eigth() },
         onEnterBack: () => {
            camera_go_eigth();
         }

 })
        
         ScrollTrigger.create({
  trigger: '.eve',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => { camera_go_eve() },
         onEnterBack: () => {
            camera_go_eve();
         }

         })
        
          ScrollTrigger.create({
  trigger: '.dia',
    start: "top center",
    end: "bottom bottom",
         markers: true,
         onEnter: () => { camera_go_dia() },
         onEnterBack: () => {
            camera_go_dia();
         }

     })

        /*
        
        ScrollTrigger.create({
            markers:true,
    trigger: '.second',
     start: "top bottom",
            end: "top top",
    toggleActions: "play pause resume reset",
    onEnter: camera_go_second,
  onEnterBack:camera_go_second,
    //onLeaveBack: camera_go_third,
 //onLeave:camera_go_second
        })
        
ScrollTrigger.create({
    trigger: '.third',
           start: "top bottom",
    end:"top top",
    markers: true,
        toggleActions: "play pause resume reset",
    onEnter: camera_go_third,
    //onLeaveBack: camera_go_third,
    onEnterBack: camera_go_third,
   // onLeave:camera_go_third

})*/

    /*
     gsap.to(".second", {
    scrollTrigger: {
    start: "top center",
    end: "bottom bottom",
    toggleActions: "restart none none none",

  },

        })
    // First Section
        console.log('?')
        
     */

  /*
  it.to(target, {
        x: 1,
        y: 10,
        z: 5,
        duration: 10,
        scrollTrigger: {
          trigger:".second", start:"top bottom", end:"top top", markers:true, scrub:true
      },
        onUpdate
    })
    */
    
}
    stepScroll();
   


   viewer.addEventListener('preFrame', ()=>{
        if(needsUpdate){
            camera.positionUpdated(false)
            camera.targetUpdated(true)
            needsUpdate = false;
        }

    })
  
let lastKnownScrollPosition = 0;

elem.style.position = 'absolute';


document.addEventListener("scroll", (event) => {
 lastKnownScrollPosition = window.scrollY;
// console.log(lastKnownScrollPosition,elem)
 //elem.style.top = `${lastKnownScrollPosition}px`

  
})
    
    
 click_black.addEventListener('click',() => {
        change_color(new Color(0x181818).convertSRGBToLinear())
        change_color2(new Color(0x857e7e).convertSRGBToLinear())
        change_color3(new Color(0x333333).convertSRGBToLinear())
})
    
 click_white.addEventListener('click',() => {
        change_color(new Color(0x9c9c9c).convertSRGBToLinear())
        change_color2(new Color(0xfefefe).convertSRGBToLinear())
        change_color3(new Color(0xfefefe).convertSRGBToLinear())
})
 click_green.addEventListener('click',() => {
        change_color(new Color(0xa6caa0).convertSRGBToLinear())
        change_color2(new Color(0xc0ddb6).convertSRGBToLinear())
        change_color3(new Color(0x769787).convertSRGBToLinear())
})
 click_red.addEventListener('click',() => {
        change_color(new Color(0xba5656).convertSRGBToLinear())
        change_color2(new Color(0xd47171).convertSRGBToLinear())
        change_color3(new Color(0xa73f3f).convertSRGBToLinear())
})
 click_blue.addEventListener('click',() => {
        change_color(new Color(0x95c7f9).convertSRGBToLinear())
        change_color2(new Color(0xa8d1f2).convertSRGBToLinear())
        change_color3(new Color(0x5d788a).convertSRGBToLinear())
})


    
function change_color(_colorchange: Color) {
// change_color(new Color(ox343s).covertSRGBToLiner()
    //console.log('색 지정 이너',inn_color)
    //viewer.scene.setDirty()<색 저장
    inn_color.color = _colorchange;
    viewer.scene.setDirty()
    }
    function change_color2(_colorchange: Color) {
// change_color(new Color(ox343s).covertSRGBToLiner()
     console.log('색 지정 아웃 ',out_color)
    //viewer.scene.setDirty()<색 저장
    out_color.color = _colorchange;
    viewer.scene.setDirty()
    }
     function change_color3(_colorchange: Color) {
// change_color(new Color(ox343s).covertSRGBToLiner()
     console.log('색 지정 머리부분 ',head_color)

    head_color.color = _colorchange;
    viewer.scene.setDirty()
}


}



setupViewer()




