import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,

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
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()


let view =camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
  view._cameraViews=[view]

     view = camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
  //view.position.set(1,2,5)
  camViewPlugin._cameraViews.push(view)
    const controls :any = viewer.scene.activeCamera.controls;
    controls.autoRotate = true; 

const options = viewer.scene.activeCamera.getCameraOptions();
    options.zoom = 0.95;
    controls.autoRotateSpeed = 2;
viewer.scene.activeCamera.setCameraOptions(options);



      view = camViewPlugin.getCurrentCameraView(viewer.scene.activeCamera)
  view.position.set(-2,4,5)

  camViewPlugin._cameraViews.push(view)
    
      //camViewPlugin.animDuration = 5000 
    camViewPlugin.animEase = 'circInOut'
      
 // await camViewPlugin.animateToView(camViewPlugin._cameraViews[0], 5000)
  //await camViewPlugin.animateToView(camViewPlugin._cameraViews[1], 5000)

function stepScroll() {
    gsap.timeline({
 scrollTrigger: {
    trigger: ".second",
    start: "top center",
    end: "bottom bottom",
    toggleActions: "play none none reset",
    markers: true,
  },
    });
    // First Section
    console.log('?')
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
    
    
var elem: any = document.getElementById('webgi-canvas-container') as HTMLDivElement | null;
let lastKnownScrollPosition = 0;

elem.style.position = 'absolute';


document.addEventListener("scroll", (event) => {
 lastKnownScrollPosition = window.scrollY;
// console.log(lastKnownScrollPosition,elem)
 elem.style.top = `${lastKnownScrollPosition}px`

  
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
    console.log('색 지정 이너',inn_color)
    //viewer.scene.setDirty()<색 저장
    inn_color.color = _colorchange;

    }
    function change_color2(_colorchange: Color) {
// change_color(new Color(ox343s).covertSRGBToLiner()
     console.log('색 지정 아웃 ',out_color)
    //viewer.scene.setDirty()<색 저장
    out_color.color = _colorchange;

    }
     function change_color3(_colorchange: Color) {
// change_color(new Color(ox343s).covertSRGBToLiner()
     console.log('색 지정 머리부분 ',head_color)
    //viewer.scene.setDirty()<색 저장
    head_color.color = _colorchange;

}


}



setupViewer()




