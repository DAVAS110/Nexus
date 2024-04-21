import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/standnexuscr.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={[8.957, 0.084, 6.618]} />
      <mesh geometry={nodes.Cubo.geometry} material={materials['pared 2']} position={[0.244, 2.624, -2.775]} rotation={[0, 0, 3.141]} scale={[2.724, 2.629, 0.235]} />
      <mesh geometry={nodes.Cubo002.geometry} material={materials['pared 1']} position={[-4.425, 2.686, -1.069]} rotation={[0, 0.745, -Math.PI]} scale={[2.46, 2.588, 0.212]} />
      <mesh geometry={nodes.Cubo001.geometry} material={materials['pared 3']} position={[4.802, 2.631, -1.01]} rotation={[0.02, -0.777, -3.141]} scale={[2.46, 2.588, 0.212]} />
      <mesh geometry={nodes.Sup_cilindro.geometry} material={materials['cilindro 1']} position={[-4.11, 2.742, -0.641]} rotation={[2.044, 0.464, 2.291]} scale={[-2.029, -0.361, -2.029]} />
      <mesh geometry={nodes.Sup_cilindro001.geometry} material={materials['cilindro 2']} position={[-4.225, 2.736, -0.761]} rotation={[-0.814, -0.635, -2.161]} scale={[-1.868, -0.535, -1.777]} />
      <mesh geometry={nodes.Cilindro.geometry} material={materials['cilindro 3']} position={[-4.404, 2.71, -0.874]} rotation={[-2.879, 0.811, 1.384]} scale={[2.074, 0.069, 2.074]} />
      <mesh geometry={nodes.Cilindro001.geometry} material={materials['cilindro 3']} position={[-4.363, 2.695, -0.828]} rotation={[-2.889, 0.775, 1.398]} scale={[2.074, 0.069, 2.074]} />
      <mesh geometry={nodes.Cilindro002.geometry} material={nodes.Cilindro002.material} position={[-4.199, 2.732, -0.732]} rotation={[-1.995, 0.474, -2.335]} scale={[-1.773, -0.033, -1.809]} />
      <mesh geometry={nodes.Cubo003.geometry} material={materials['rect 1']} position={[-3.614, 3.374, -0.99]} rotation={[-0.889, -0.601, -0.931]} scale={[-0.154, -0.094, -1.647]} />
      <mesh geometry={nodes.Cubo004.geometry} material={materials['rect 1']} position={[-3.983, 2.447, -0.717]} rotation={[-2.44, 0.719, 2.64]} scale={[-0.161, -0.098, -1.793]} />
      <mesh geometry={nodes.Cubo005.geometry} material={materials['rect 1']} position={[-4.166, 2.8, -0.45]} rotation={[1.349, -0.24, -2.216]} scale={[-0.161, -0.098, -1.793]} />
      <mesh geometry={nodes.Cubo006.geometry} material={materials['led v1']} position={[-3.898, 2.407, -0.973]} rotation={[-2.449, 0.722, 0.902]} scale={[-0.04, -0.077, -0.825]} />
      <mesh geometry={nodes.Cubo007.geometry} material={materials['led v1']} position={[-4.498, 1.568, -0.423]} rotation={[1.323, -0.183, 0.762]} scale={[-0.036, -0.072, -0.494]} />
      <mesh geometry={nodes.Cubo008.geometry} material={materials['led v1']} position={[-3.071, 2.526, -1.504]} rotation={[-0.927, -0.644, 0.291]} scale={[-0.037, -0.028, -0.46]} />
      <mesh geometry={nodes.Cubo009.geometry} material={materials['led v1']} position={[-3.064, 3.275, -1.497]} rotation={[0.714, -0.764, 0.417]} scale={[-0.024, -0.035, -0.337]} />
      <mesh geometry={nodes.Cubo010.geometry} material={materials['led v1']} position={[-3.932, 4.191, -0.665]} rotation={[1.427, -0.274, -0.482]} scale={[-0.031, -0.047, -0.348]} />
      <mesh geometry={nodes.Cubo011.geometry} material={materials['led v1']} position={[-4.18, 4.171, -0.441]} rotation={[-0.86, -0.555, -1.397]} scale={[-0.033, -0.048, -0.37]} />
      <mesh geometry={nodes.Cubo012.geometry} material={materials['led 2']} position={[-4.32, 2.883, -0.44]} rotation={[0.358, 1.101, -2.171]} scale={[0.975, 0.024, 0.056]} />
      <mesh geometry={nodes.Cubo013.geometry} material={materials['led 2']} position={[-4.836, 1.989, -0.033]} rotation={[1.406, 0.711, 2.666]} scale={[0.57, 0.023, 0.056]} />
      <mesh geometry={nodes.Cubo014.geometry} material={materials['led 2']} position={[-4.361, 3.958, -0.41]} rotation={[1.397, -0.772, 2.437]} scale={[0.509, 0.017, 0.056]} />
      <mesh geometry={nodes.Cubo015.geometry} material={materials['led 2']} position={[-3.909, 4.046, -1.018]} rotation={[-3.095, -0.8, 1.918]} scale={[0.444, 0.046, 0.161]} />
      <mesh geometry={nodes.Cubo016.geometry} material={materials['led 2']} position={[-3.041, 3.085, -1.703]} rotation={[-2.999, -0.643, 2.729]} scale={[0.254, 0.044, 0.17]} />
      <mesh geometry={nodes.Cubo017.geometry} material={materials['led 2']} position={[-3.044, 2.706, -1.689]} rotation={[2.734, -0.83, -2.706]} scale={[0.305, 0.048, 0.194]} />
      <mesh geometry={nodes.Cubo018.geometry} material={materials['led v1']} position={[-1.141, 2.378, -2.464]} rotation={[-1.297, -1.551, -0.327]} scale={[-0.053, -0.061, -1.197]} />
      <mesh geometry={nodes.Cubo019.geometry} material={materials['led v1']} position={[1.824, 3.533, -2.464]} rotation={[-1.155, -1.55, -0.184]} scale={[-0.053, -0.061, -1.036]} />
      <mesh geometry={nodes.Cubo020.geometry} material={materials['led v1']} position={[0.465, 2.948, -2.468]} rotation={[1.564, -0.652, 2.537]} scale={[-0.05, -0.059, -0.726]} />
      <mesh geometry={nodes.Cubo021.geometry} material={materials['led 2']} position={[-1.028, 2.012, -2.418]} rotation={[1.136, -0.005, 3.141]} scale={[1.284, 0.025, 0.064]} />
      <mesh geometry={nodes.Cubo022.geometry} material={materials['led 2']} position={[1.95, 3.174, -2.478]} rotation={[1.139, -0.013, -3.13]} scale={[0.911, 0.024, 0.064]} />
      <mesh geometry={nodes.Cubo023.geometry} material={materials['led 2']} position={[0.657, 2.624, -2.481]} rotation={[0.653, 0.699, -2.453]} scale={[0.722, 0.026, 0.067]} />
      <mesh geometry={nodes.Cubo024.geometry} material={materials['led 2']} position={[1.551, 2.558, -2.465]} rotation={[1.136, 0.007, 3.122]} scale={[0.885, 0.025, 0.064]} />
      <mesh geometry={nodes.Plano002.geometry} material={materials['Material.003']} position={[-0.987, 2.811, -2.529]} rotation={[1.57, 0, 0]} scale={[1.189, 1.045, 0.159]} />
      <mesh geometry={nodes['Sin_título-removebg-preview'].geometry} material={materials['Sin_título-removebg-preview']} position={[0.257, 1.084, -2.502]} rotation={[Math.PI / 2, 0, -0.006]} scale={1.597} />
      <mesh geometry={nodes.Cubo025.geometry} material={materials.mesa} position={[4.547, 1.105, 0.804]} rotation={[-Math.PI, 0.79, -Math.PI]} scale={[1.488, 1, 1.38]} />
      <mesh geometry={nodes['Sin_título-removebg-preview001'].geometry} material={materials['Sin_título-removebg-preview']} position={[3.549, 0.694, 1.861]} rotation={[1.569, 0, 0.733]} scale={0.897} />
      <mesh geometry={nodes.Cubo026.geometry} material={nodes.Cubo026.material} position={[4.469, 2.078, 0.883]} rotation={[0, -0.786, 0]} scale={[1.469, 0.059, 1.477]} />
      <mesh geometry={nodes.Cubo027.geometry} material={materials['led 2']} position={[5.429, 2.211, -0.062]} rotation={[1.255, -0.303, -2.407]} scale={[1.449, 0.037, 0.072]} />
      <mesh geometry={nodes['WhatsApp_Image_2024-04-07_at_21003_PM-removebg-preview'].geometry} material={materials['WhatsApp_Image_2024-04-07_at_2.10.03_PM-removebg-preview']} position={[5.422, 3.997, -0.008]} rotation={[1.579, 0.036, -2.365]} scale={2.355} />
      <mesh geometry={nodes['our_team-removebg-preview'].geometry} material={materials['our_team-removebg-preview']} position={[5.41, 4.996, -0.023]} rotation={[-Math.PI / 2, 0, 2.367]} scale={[-0.761, -2.901, -0.785]} />
      <mesh geometry={nodes.paretod.geometry} material={materials.paretod} position={[3.677, 2.061, -1.807]} rotation={[1.61, 0.04, 0.763]} scale={2.748} />
      <mesh geometry={nodes['Sin_título-removebg-preview002'].geometry} material={materials['Sin_título-removebg-preview']} position={[3.654, 4.78, -1.71]} rotation={[Math.PI / 2, 0, 0.751]} scale={0.809} />
      <mesh geometry={nodes['sonsors-removebg-preview'].geometry} material={materials['sonsors-removebg-preview']} position={[3.657, 3.128, -1.746]} rotation={[Math.PI / 2, 0, 0.799]} scale={2.27} />
      <mesh geometry={nodes['delante-removebg-preview'].geometry} material={materials['delante-removebg-preview']} position={[3.539, 1.603, 1.784]} rotation={[1.541, 0, -2.349]} scale={1.348} />
      <mesh geometry={nodes['ladito-removebg-preview'].geometry} material={materials['ladito-removebg-preview']} position={[-0.693, 3.92, -2.491]} rotation={[1.562, -0.071, 0.014]} scale={3.412} />
      <mesh geometry={nodes['LOGOOOO-removebg-preview'].geometry} material={materials['LOGOOOO-removebg-preview']} position={[1.891, 4.485, -2.498]} rotation={[1.565, 0, 0]} scale={[1.414, 19.252, 1.396]} />
      <mesh geometry={nodes.Cilindro003.geometry} material={materials['Material.004']} position={[-0.04, 0.948, 2.492]} rotation={[0, 0.169, -0.024]} scale={[0.432, 0.611, 0.431]} />
      <mesh geometry={nodes['Sin_título-removebg-preview003'].geometry} material={materials['Sin_título-removebg-preview']} position={[-0.153, 1.301, 3.473]} rotation={[1.57, -0.039, 0.027]} scale={0.897} />
    </group>
  )
}

useGLTF.preload('/standnexuscr.gltf')
