const skills = [
  {text: 'JavaScript', done: true, _id: 125223},
  {text: 'Node.js', done: false, _id: 127904},
  {text: 'CSS', done: false, _id: 139608},
]

const find = (conditions, callback) => {
 
  try {
   
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }

    if (Object.keys(conditions).length === 0) return callback(null, skills)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
  
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was found')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}