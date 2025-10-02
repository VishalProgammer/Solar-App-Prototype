import ("./home.css")
import { Suspense,useState, useEffect,useRef  } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Model } from "../../Sun"
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { Earth } from "../../Earth"




export function Home(){
    const [index, setindex] = useState(0)
    const p2_audio = useRef(new Audio('./Bubbles.mp3'))
    const p3_audio = useRef(new Audio('./CHILL GUY.MP3'))

    function pauseAllSounds() {
        p2_audio.current.pause();
        p3_audio.current.pause();
        // Resetting currentTime makes it start from the beginning next time
        p2_audio.current.currentTime = 0;
        p3_audio.current.currentTime = 0;
      }


    function next1(){
        setindex(prevIndex => prevIndex + 1)
        p2_audio.current.play()
    }
    function next2(){
        setindex(prevIndex => prevIndex + 1)
        p2_audio.current.pause()
        p3_audio.current.play()
    }
    function next3(){
        setindex(prevIndex => prevIndex + 1)
        
    }
    function next4(){
        setindex(prevIndex => prevIndex + 1)
        
    }

    


    
      
    
    
    
    function Page1(){

        const scene = useRef();


        useGSAP(() => {
          
            
            gsap.from('#canva-container',{
                x:-1000,
                duration:1,
                delay:1
            });
    
            gsap.from('#des',{
                x:1000,
                duration:1,
                delay:1
            });

        },{scope:scene});


            




        return(<>
            <div id="S-main" ref={scene}>
        
        <div id="canva-container">
            {/* <img src="./sun.png" alt="sun" /> */}
            <Canvas camera={{ position: [0, 2, 25], fov: 75 }}>
                {/* Suspense provides a fallback while the model is loading */}
                <Suspense fallback={null}>
                
                {/* Lighting is crucial! Ambient light provides a base light level. */}
                <ambientLight intensity={0.5} />
                
                {/* A directional light acts like the sun. */}
                <directionalLight position={[10, 10, 5]} intensity={1} />
                
                {/* This is your 3D model component */}
                <Model />
                <EffectComposer>
                    <Bloom 
                    intensity={1.2}             // The bloom intensity.
                    luminanceThreshold={1}    // Makes bright areas bleed more light.
                    luminanceSmoothing={0.2}  // Smooths the transition.
                    />
                </EffectComposer>

                {/* Environment provides realistic ambient lighting and reflections */}
                <Environment preset="sunset" />

                {/* OrbitControls allows you to rotate, pan, and zoom the camera */}
                <OrbitControls enableZoom={false} enablePan={false} />

                </Suspense>
            </Canvas>
            </div>
       <div id="des">
        <h1>This is Sun</h1>
        <br />
        <p>Sun is hot
            <br />
            just like you
            <br />
            but
            <br />
            I am hotter

        </p>
        <button onClick={next1}>Explore more</button>
       </div>
    </div>
        </>)
    }
    
    function Page2(){

        const scene2 = useRef();


        useGSAP(() => {
          
            
            gsap.from('#canva-container2',{
                x:-1000,
                duration:1.5,
                opacity:0,
            });

            const tl = gsap.timeline()
            
            tl.from('#des2 pre',{
                duration:1,
                opacity:0,
                delay:1,
                stagger:1,
            });

        },{scope:scene2});


            




        return(<>
            <div id="S-main2" ref={scene2}>
        
        <div id="canva-container2">
            {/* <img src="./sun.png" alt="sun" /> */}
            <Canvas camera={{ position: [0, 2, 1], fov: 75 }}>
                {/* Suspense provides a fallback while the model is loading */}
                <Suspense fallback={null}>
                
                {/* Lighting is crucial! Ambient light provides a base light level. */}
                <ambientLight intensity={0.5} />
                
                {/* A directional light acts like the sun. */}
                <directionalLight position={[10, 10, 5]} intensity={1} />
                
                {/* This is your 3D model component */}
                <Earth />
                <EffectComposer>
                    <Bloom 
                    intensity={1.2}             // The bloom intensity.
                    luminanceThreshold={1}    // Makes bright areas bleed more light.
                    luminanceSmoothing={0.2}  // Smooths the transition.
                    />
                </EffectComposer>

                {/* Environment provides realistic ambient lighting and reflections */}
                <Environment preset="sunset" />

                {/* OrbitControls allows you to rotate, pan, and zoom the camera */}
                <OrbitControls enableZoom={false} enablePan={false} />

                </Suspense>
            </Canvas>
            </div>
       <div id="des2">
        <pre>Earth </pre>
        <pre>atmosphere </pre>
        <pre>is </pre>
        <pre>very </pre>
        <pre>vulnerable </pre>
        <pre>to </pre>
        <pre>these </pre>
        <pre>solar </pre>
        <pre>flares </pre>
        <pre>of </pre>
        <pre>sun! </pre>
        <br />
        <button onClick={next2}>Explore more</button>
       </div>
    </div>
        </>)
    }
    
    function Page3(){

        const scene3 = useRef();

        useGSAP(() => {

            const tl = gsap.timeline()

            tl.from('#canva-container3 img',{
                opacity:0,
                scale:0,
                delay:2,
                duration:2.5
            })
            tl.from("#des3",{
                opacity:0,
                delay:0.1,
                
            })
            tl.from("#des3 pre",{
                opacity:0,
                transform:0,
                delay:1,
                duration:1,
                stagger:1
            })

        },{scope:scene3});

        return(<>
            <div id="S-main3" ref={scene3} >
        
        <div id="canva-container3">
            <img id="gif" src="./Farmer_Animation.gif" alt="farmer working" />            
        </div>
       <div id="des3">
        <pre>Earth </pre>
        <pre>atmosphere </pre>
        <pre>is </pre>
        <pre>very </pre>
        <pre>vulnerable </pre>
        <pre>to </pre>
        <pre>these </pre>
        <pre>solar </pre>
        <pre>flares </pre>
        <pre>of </pre>
        <pre>sun! </pre>
        <br />
        <button onClick={next3}>&gt;</button>
       </div>
    </div>
        </>)
    }

    function Page4(){

        const scene4 = useRef();

        useGSAP(() => {

            const tl = gsap.timeline()

            tl.from('#canva-container4 img',{
                opacity:0,
                scale:0,
                delay:1,
                duration:2.5
            })
            tl.from("#des4",{
                opacity:0,
                delay:0.1,
                
            })
            tl.from("#des4 pre",{
                opacity:0,
                transform:0,
                delay:1,
                duration:1,
                stagger:0.5
            })

        },{scope:scene4});

        return(<>
            <div id="S-main4" ref={scene4} >
        
        <div id="canva-container4">
            <img id="gif" src="./farmer wave.png" alt="farmer working" />            
        </div>
       <div id="des4">
        <pre>he </pre>
        <pre>is </pre>
        <pre>Alex, </pre>
        <pre>a </pre>
        <pre>30 </pre>
        <pre>years </pre>
        <pre>old </pre>
        <pre>farmer </pre>
        <pre>from </pre>
        <pre>italy. </pre>
        <br />
        <pre>His </pre>
        <pre>family </pre>
        <pre>is </pre>
        <pre>farming </pre>
        <pre>for </pre>
        <pre>3 Generations! </pre>
        <br />
        <button onClick={next4}>&gt;</button>
       </div>
    </div>
        </>)
    }


    if (index == 0){
        return(<Page1/>)
    }
    else if (index == 1){
        return(<Page2/>)
    }
    else if (index == 2){
        return(<Page3/>)
    }
    else if (index == 3){
        return(<Page4/>)
    }
    // return(<Page4/>)

}