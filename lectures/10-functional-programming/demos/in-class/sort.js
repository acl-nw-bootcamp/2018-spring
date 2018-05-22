// const numberCompare = (left, right) => {
  // if (left.number < right.number) {
  //   return -1;
  // } else if (left.number > right.number) {
  //   return 1;
  // } else {
  //   return 0;
  // }
// }

const numberCompare = (left, right) => left.number - right.number;

const actorCompare = (left, right) => {
  const leftLast = left.actor.split(' ')[1];
  const rightLast = right.actor.split(' ')[1];
  if (leftLast < rightLast) {
    return -1;
  } else if (leftLast > rightLast) {
    return 1;
  } else { // Same last name - need to check first name
    const leftFirst = left.actor.split(' ')[0];
    const rightFirst = right.actor.split(' ')[0];
    if (leftFirst < rightFirst) {
      return -1;
    } else if (leftFirst > rightFirst) {
      return 1;
    } else {
      return 0;
    }
  }
}
