import { materialConstant } from '../constants/materialContstants'

export const materialActions = {
  addMaterial,
  deleteMaterial
}

function addMaterial(material) {
  return { type: materialConstant.ADD_MATERIAL, material }
}

function deleteMaterial(_id) {
  return { type: materialConstant.DELETE_MATERIAL, _id }
}
