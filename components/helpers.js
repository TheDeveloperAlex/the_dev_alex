import moment from "moment";

export function getAge() {

  const birth = [24, 1, 2005];

  const curYear = moment().year();
  const curMont = moment().month();
  const curDay = moment().date();

  if (curMont >= birth[1] || (curMont === birth[1] && curDay >= birth[0])) {
    return  curYear - birth[2];
  } else {
    return  curYear - birth[2] - 1;
  }
}