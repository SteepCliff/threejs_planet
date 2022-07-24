import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Cloud() {
    const cloudMap = useLoader(TextureLoader, 'fair_clouds_4k.png')
    const rotation = useRef();
    useFrame(() => (rotation.current.rotation.y += 0.001));
    return (
        <mesh ref={rotation}>
          <sphereGeometry args={[2.05,30,30]} />
          <meshPhongMaterial map={cloudMap} opacity={0.8} transparent={true} depthWrite={false} />
        </mesh>
    )
}