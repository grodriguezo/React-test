import React from 'react';
import { CiRead } from "react-icons/ci";

function CompletedIcon({onClick}) {
    return (
      <CiRead onClick={onClick}>Completado</CiRead>
    );
}
export { CompletedIcon };