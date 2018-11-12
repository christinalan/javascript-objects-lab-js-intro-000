var recipes = new Object ({})

var obj = {prop:1}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObj = object.assign({},obj)
  delete newObj.prop
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
