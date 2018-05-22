const modifiedDoctors = doctor => {
  const actorNames = doctor.actor.split(' ');
  const newInfo = {};
  newInfo.first = actorNames[0];
  newInfo.last = actorNames[1];
  newInfo.range = `${doctor.begin} - ${doctor.end}`;
  newInfo.years = doctor.end - doctor.begin + 1;
  return newInfo;
}
