import React, {useRef} from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Earth() {
    const earthMap = useLoader(TextureLoader, 'earthmap4k.jpg')
    const earthBumpMap = useLoader(TextureLoader, 'earthbump4k.jpg')
    const earthSpecular = useLoader(TextureLoader, 'earthspec4k.jpg')
    const rotation = useRef();
    useFrame(() => (rotation.current.rotation.y += 0.001));
    return (
        <mesh ref={rotation}>
          <sphereGeometry args={[2,30,30]} />
          <meshPhongMaterial map={earthMap} bumpMap={earthBumpMap} specularMap={earthSpecular} specular='grey'/>
        </mesh>
    )
}