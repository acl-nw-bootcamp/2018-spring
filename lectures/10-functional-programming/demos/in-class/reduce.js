// const calculateYears = (totalYears, doctor) => {
//   const doctorYears = doctor.end - doctor.begin + 1;
//   totalYears += doctorYears;
//   return totalYears;
// }

const calculateYears = (totalYears, doctor) => totalYears + doctor.end - doctor.begin + 1;

const longRunDoctors = (newList, doctor) => {
  if (doctor.end >= doctor.begin + 3) {
    newList.push(doctor);
  }
  return newList;
}
