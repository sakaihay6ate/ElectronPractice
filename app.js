const moment = require('moment');

const elNow = document.querySelector('.now-time');
const elAlarm = document.querySelector('.alarm-time');
let nowTime;
let alarmTime;
const onAlarmTextChange = (event) => {
  alarmTime = event.target.value;
};
elAlarm.addEventListener('change', onAlarmTextChange);
let time = moment();


const now = moment(time).format('HH:mm:ss');
nowTime = now;
elNow.innerText = now;

const alarm = moment(time).add(5, 'seconds').format('HH:mm:ss');
alarmTime = alarm;
elAlarm.value = alarm;
const check = () => {
  const diff = moment(nowTime, 'HH:mm:ss').diff(moment(alarmTime, 'HH:mm:ss'));
  if (diff === 0) {
    alert('wake up!');
  }
};
const timer = () => {
  time = moment().format('HH:mm:ss');
  nowTime = time;
  elNow.innerText = time;
  check();
  setTimeout(() => {
    timer();
  }, 1);
};
timer();

