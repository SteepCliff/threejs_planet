import { useEffect } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useThree } from '@react-three/fiber';


export default function CameraController() {
    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
}