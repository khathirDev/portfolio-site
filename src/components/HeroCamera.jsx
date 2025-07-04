import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";


const HeroCamera = ({children, isMobile}) => {

    const groupRef= useRef();
    // console.log(groupRef.current)
    useFrame((state,delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        if(!isMobile && groupRef.current){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta);
        }
    })
    return (
        <group ref={groupRef} scale={1}>{children}</group>
    )
}

export default HeroCamera