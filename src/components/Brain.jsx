import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function BrainHologram(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/brain_hologram.glb");

  // Slowly rotate the model on the Y axis in place
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.007;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={props.scale || 1.2}
      position={props.position || [1.2, 0.5, 0]}
    >
      {/* Rotating group */}
      <group ref={group} rotation={[0, 0, 0]}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model">
            <group name="07e8ba9162674e488df6dd56fc54b2e3fbx" scale={0.01}>
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Icosphere001"
                    rotation={[-Math.PI / 2, 0, -2.734]} // Internal rotation
                    scale={100}
                  >
                    <mesh
                      name="Icosphere001_Particle_2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_2_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_2_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                      material={materials.Particle_2}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0.geometry}
                      material={materials.Particle_1}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0_1.geometry}
                      material={materials.Particle_1}
                    />
                    <mesh
                      name="Icosphere001_Particle_1_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Icosphere001_Particle_1_0_2.geometry}
                      material={materials.Particle_1}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/brain_hologram.glb");