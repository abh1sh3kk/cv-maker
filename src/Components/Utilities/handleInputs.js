export function isPersonalInfo(event) {
  return event.target.classList.contains("personalInfo");
}

export function isExperience(event) {
  return event.target.classList.contains("experienceInput");
}

export function isEducation(event) {
  return event.target.classList.contains("educationInput");
}
export function findIndexFromKey(obj, key, name) {
  return obj[name].findIndex((theObj) => theObj.key === key);
}
export function removeInput(obj, context, index) {
	obj[context].splice(index, 1);
}
