import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { RefObject } from "react";
import { Color } from "three";

interface DomeProps {
  floorRef: RefObject<RapierRigidBody>;
}

export const Floor = ({ floorRef }: DomeProps) => {
  const i = floorRef.current?.rotation();

  return (
    <RigidBody type="fixed" friction={20} ref={floorRef}>
      <mesh position={[0, -2, 0]} receiveShadow>
        <cylinderGeometry attach="geometry" args={[5, 5, 0.1]} />
        <meshStandardMaterial
          color={new Color(0x2e2e2e)}
          envMap={null}
          transparent
          opacity={0.8}
        />
      </mesh>
    </RigidBody>
  );
};
