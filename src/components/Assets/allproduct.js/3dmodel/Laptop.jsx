/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 laptop.gltf 
Author: GeniusPilot2016 (https://sketchfab.com/GeniusPilot2016)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/my-laptop-acbf7836db8e420bb8f79c8467a9d096
Title: My Laptop
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.display} />
        <lineSegments geometry={nodes.Object_3.geometry} material={materials.ports_metal} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.ports_metal} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.touchpad_and_power_button} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.webcam_frame} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.webcam_lens} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.body} />
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.gltf')
