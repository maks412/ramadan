// Simple data model: 30 days of tasks
const ramadanTasks = [
  {
    title: 'Күнді Құран оқумен бастаңыз',
    category: 'Құлшылық',
    note: 'Кем дегенде бір бет Құран оқу.'
  },
  {
    title: 'Ата-анаңызға қоңырау шалыңыз',
    category: 'Отбасы',
    note: 'Жәй ғана хал-жағдайын сұрау – үлкен сауап.'
  },
  {
    title: 'Мұқтаж жанға жасырын садақа беріңіз',
    category: 'Қоғам',
    note: 'Сомасы маңызды емес, ықылас маңызды.'
  },
  {
    title: '5 минут тыныштықта истиғфар айту',
    category: 'Құлшылық',
    note: '"Астағфирулла" деп кем дегенде 100 рет айту.'
  },
  {
    title: 'Бір жаман әдетті бүгін мүлде істемеу',
    category: 'Тәрбие',
    note: 'Теміртірек әдеттерді бақылау арқылы өзгерту.'
  },
  {
    title: 'Досыңызға шынайы мадақ айтыңыз',
    category: 'Қоғам',
    note: 'Жақсылықты байқап, сөзбен демеу.'
  },
  {
    title: 'Кем дегенде бір бет діни кітап оқу',
    category: 'Білім',
    note: 'Рамазан – ілімді күшейтетін ай.'
  },
  {
    title: 'Кем дегенде бір рет жамағатпен намаз оқу',
    category: 'Құлшылық',
    note: 'Үйде отбасыңызбен де болуы мүмкін.'
  },
  {
    title: 'Күні бойы ғайбаттан сақтану',
    category: 'Тіл',
    note: 'Сөйлер алдында аз ғана ойлану.'
  },
  {
    title: 'Түнде қысқа дуамен күнді қорытындылау',
    category: 'Дұға',
    note: 'Бүгінгі күн үшін шүкірлік айту.'
  },
  // Remaining days – simple, uplifting tasks
];

// Fill up to 30 days by reusing patterns if needed
while (ramadanTasks.length < 30) {
  const index = ramadanTasks.length + 1;
  ramadanTasks.push({
    title: `${index}-күн: шағын ізгі амал`,
    category: index % 2 === 0 ? 'Қоғам' : 'Құлшылық',
    note:
      index % 2 === 0
        ? 'Бір адамға көңіл сыйлаңыз: жаны жай табатындай жылы сөз айтыңыз.'
        : 'Өзіңізге қосымша нәпіл құлшылық белгілеңіз (2 рәкағат, қысқа зікір, дұға).'
  });
}

const dayPicker = document.getElementById('day-picker');
const taskList = document.getElementById('task-list');
const todayLabel = document.getElementById('today-label');

function getTodayDayNumber() {
  // Рамазан басталуы мен аяқталуы:
  // 1-күн = 19.02, 30-күн = 19.03 (сол жылдың ішінде).
  const today = new Date();
  const year = today.getFullYear();

  // Ай индексі JS-те 0-ден басталады: 1 = ақпан, 2 = наурыз.
  const start = new Date(year, 1, 19); // 19.02
  const end = new Date(year, 2, 19); // 19.03 (қоса есептегенде)

  const msPerDay = 24 * 60 * 60 * 1000;

  if (today <= start) {
    // Рамазан әлі басталмады – бірінші күнді көрсетеміз.
    return 1;
  }

  if (today >= end) {
    // Рамазан аяқталды – соңғы күнді бекітіп қоямыз.
    return 30;
  }

  const diffMs = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / msPerDay);
  const dayIndex = diffDays + 1; // 0-күн емес, 1-күннен бастаймыз.

  // Қауіпсіздік үшін 1–30 аралығына шектеу.
  return Math.min(Math.max(dayIndex, 1), 30);
}

function renderDayPills(activeDay) {
  dayPicker.innerHTML = '';

  const todayDay = getTodayDayNumber();

  for (let day = 1; day <= 30; day++) {
    const pill = document.createElement('button');
    pill.className = 'day-pill';
    pill.textContent = `${day}`;

    if (day === activeDay) {
      pill.classList.add('day-pill--active');
    }

    if (day === todayDay) {
      pill.classList.add('day-pill--today');
      pill.setAttribute('aria-label', `${day}-күн, бүгін`);
    }

    pill.addEventListener('click', () => setActiveDay(day, { scrollIntoView: true }));
    dayPicker.appendChild(pill);
  }
}

function renderTasksForDay(day) {
  taskList.innerHTML = '';

  const task = ramadanTasks[day - 1];

  const card = document.createElement('article');
  card.className = 'task-card task-enter';
  card.dataset.index = day.toString().padStart(2, '0');

  const title = document.createElement('h3');
  title.className = 'task-title';
  title.textContent = task.title;

  const meta = document.createElement('p');
  meta.className = 'task-meta';
  meta.textContent = task.note;

  const tag = document.createElement('div');
  tag.className = 'task-tag';

  const dot = document.createElement('span');
  dot.className = 'task-tag-dot';

  const tagText = document.createElement('span');
  tagText.textContent = task.category;

  tag.appendChild(dot);
  tag.appendChild(tagText);

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(tag);
  taskList.appendChild(card);

  // Trigger reflow for animation restart when switching days quickly
  // eslint-disable-next-line no-unused-expressions
  card.offsetHeight;
  card.classList.add('task-enter');
}

function setActiveDay(day, options = {}) {
  todayLabel.textContent = `${day}-күн`;
  renderDayPills(day);
  renderTasksForDay(day);

  if (options.scrollIntoView) {
    const rect = taskList.getBoundingClientRect();
    const isPartlyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isPartlyVisible) {
      taskList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const todayDay = getTodayDayNumber();
  setActiveDay(todayDay);
});

