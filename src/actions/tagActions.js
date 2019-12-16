import { tagConstants } from '../constants/tagConstants'

export const tagActions = {
  addTag,
  deleteTag
}

function addTag(tag) {
  return { type: tagConstants.ADD_TAG, tag }
}

function deleteTag(_id) {
  return { type: tagConstants.DELETE_TAG, _id }
}