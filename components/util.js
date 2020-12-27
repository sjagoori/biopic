import { database } from '../config'
const ref = 'users/'

/**
 * Function sets data for given node
 * @todo Ensure other nodes aren't removed when data is added.
 *       Try preventing additional traffic by loading and caching
 *       existing entries; find a way to add to existing list.
 *       The update function does that by default.
 * @param {String} node select node 
 * @param {Object} data data to set
 */
export const writeData = async (child, data) => {
  await database.ref(ref).child(child).set(data)
}

/**
 * Function removes given node
 * @param {String} node select node
 */
export const deleteData = async (node) => {
  await database.ref(ref).child(node).remove()
}

/**
 * Function removes specific key from node
 * @param {String} node select node
 * @param {String} key key to remove
 */
export const deleteDataKey = async (node, key) => {
  await database.ref(ref).child(node).child(key).remove()
}

/**
 * Function updates keys in the given node; adds if it doesnt exists.
 * @param {String} node select node
 * @param {Object} data data to set
 */
export const updateData = async (node, data) => {
  await database.ref(ref).child(node).update(data)
}