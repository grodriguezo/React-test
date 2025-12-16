import React from 'react';
import { CiCircleRemove } from "react-icons/ci";

function DeleteIcon({onClick}) {
    return (
        <CiCircleRemove  onClick={onClick}>Eliminar</CiCircleRemove >
    );
}
export { DeleteIcon };