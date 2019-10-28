export function dateTransform (date) {
  const monthеs = ['Січня','Лютого','Березня', 'Квітня','Травня','Червня','Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
  const mounthDay = date.getUTCDate();
  const weekDay = capitalizeFirstLetter(date.toLocaleString('ukr', {weekday: 'long'}));
  const mounth = monthеs[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const dateString = `${weekDay} ${mounthDay} ${mounth}`
  const timeString = `${hours} : ${minutes}`;

  const transformedDateObj = {
    date: dateString,
    time: timeString
  }
  return transformedDateObj
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}