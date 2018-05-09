/** require */
const moment = require('moment');
const notifier = require('node-notifier');
const path = require('path');
/** define */
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
// console.log(notifier.supported_notifiers);
const alarm = moment(time).add(5, 'seconds').format('HH:mm:ss');
alarmTime = alarm;
elAlarm.value = alarm;
const notice = (msg) => {
  notifier.notify({
    title: 'Alarm Clock',
    message: msg,
    icon: path.join(__dirname, '/clock.png'),
    /** doesn't work on balloons == */
    sound: true,
  });
};
let isAlarm = false;
const check = () => {
  const diff = moment(nowTime, 'HH:mm:ss').diff(moment(alarmTime, 'HH:mm:ss'));
  if (diff === 0 && !isAlarm) {
    const msg = `It's ${alarmTime}. Wake Up!`;
    isAlarm = true;
    notice(msg);
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

