var recipes = new Object ({})

var obj = {prop:1}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
var newObj = Object.assign({}, obj)

function deleteFromObjectByKey(object, key)

delete newObj.prop
