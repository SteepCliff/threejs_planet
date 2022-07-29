import { Canvas, useFrame } from '@react-three/fiber';
import Earth from './components/earth';
import Cloud from './components/cloud';
import CameraController from './components/cameracontroller';
import './App.css';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={[35,35,35]}>
        <CameraController />
        <ambientLight intensity={0.07} />
        <spotLight intensity={0.3} position={[-30, 20, -10]} castShadow={true} />
        <Earth />
        <Cloud />
      
      </Canvas>
    </div>
  )
}

export default App;
