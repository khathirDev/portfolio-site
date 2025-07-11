/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

/*
import React, {useEffect, useRef} from 'react'
import {useAnimations, useFBX, useGLTF} from '@react-three/drei'

const Developer = ({animationName = 'idle', ...props}) => {
    const groupRef = useRef()


    const { nodes, materials } = useGLTF('/models/animations/Developer.glb');

   /// setting the animation //
    const { animations: idleAnimation} = useFBX('/models/animations/idle.fbx')
    const { animations: saluteAnimation} = useFBX('/models/animations/salute.fbx')
    const { animations: clappingAnimation} = useFBX('/models/animations/clapping.fbx')
    const { animations: victoryAnimation} = useFBX('/models/animations/victory.fbx')



    idleAnimation[0].name='idle';
    saluteAnimation[0].name='salute';
    clappingAnimation[0].name='clapping';
    victoryAnimation[0].name='victory';


    const {actions} = useAnimations([idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]], groupRef);

    useEffect(( ) => {
actions[animationName].reset().fadeIn(0.5).play()

        return () => actions[animationName].fadeOut(0.5)
    }, [animationName]);


    return (
        <group {...props} dispose={null} ref={groupRef}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    )
}

useGLTF.preload('/models/animations/Developer.glb')

export default Developer
*/

// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const DeveloperModel = ({ animationName = 'idle', ...props }) => {
  const groupRef = useRef();
  
  // console.log('Developer Model Rendering');

  // Safely load GLTF model with error handling
  const { nodes, materials } = useGLTF('/models/animations/Developer.glb');
  
  // console.log('Loaded GLTF Nodes:', nodes);
  // console.log('Loaded GLTF Materials:', materials);

  // Safer animation loading function
  const loadAnimation = (path) => {
    try {
      const fbx = useFBX(path);
      // console.log(`Loaded animation from ${path}:`, fbx.animations);
      return fbx.animations && fbx.animations.length > 0 
        ? { ...fbx.animations[0], name: path.split('/').pop().replace('.fbx', '') }
        : null;
    } catch (error) {
      // console.error(`Failed to load animation from ${path}:`, error);
      return null;
    }
  };

  // Load animations
  const animations = [
    '/models/animations/idle.fbx',
    '/models/animations/salute.fbx',
    '/models/animations/clapping.fbx',
    '/models/animations/victory.fbx'
  ]
  .map(loadAnimation)
  .filter(Boolean);

  // console.log('Processed Animations:', animations);

  // Use animations
  const { actions } = useAnimations(animations, groupRef);
  // console.log('Animation Actions:', actions);

  // Animation effect
  useEffect(() => {
    if (!actions) return;

    const targetAnimation = actions[animationName] || actions['idle'];
    
    if (targetAnimation) {
      // console.log(`Playing animation: ${animationName}`);
      targetAnimation.reset().fadeIn(0.5).play();
      return () => targetAnimation.fadeOut(0.5);
    }
  }, [animationName, actions]);

  // Render check
  if (!nodes) {
    // console.warn('No nodes found in Developer model');
    return null;
  }

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {nodes.Hips && <primitive object={nodes.Hips} />}
      
      {Object.entries(nodes)
        .filter(([_, node]) => node?.geometry && node?.skeleton)
        .map(([key, node]) => {
          const material = materials?.[node.material?.name];
          
          return (
            <skinnedMesh
              key={key}
              name={key}
              geometry={node.geometry}
              material={material}
              skeleton={node.skeleton}
              morphTargetDictionary={node.morphTargetDictionary}
              morphTargetInfluences={node.morphTargetInfluences}
            />
          );
        })}
    </group>
  );
};

// Wrapper component to handle async loading
const Developer = (props) => {
  return (
    <Suspense fallback={null}>
      <DeveloperModel {...props} />
    </Suspense>
  );
};

// Preload model
useGLTF.preload('/models/animations/Developer.glb');

export default Developer;