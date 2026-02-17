// Simple data model: 30 days of tasks
const ramadanTasks = [
  {
    title: 'Зікір: “Альхамдулилляһ, СубханАллаһ, Аллаһу Акбар” 100 рет',
    category: 'Зікір',
    note: 'Бұл зікір жүректі тыныштандырып, сауапты көбейтеді.'
  },
  {
    title: 'Әдеттегіден көп мөлшерде садақа беру',
    category: 'Садақа',
    note: 'Рамазанда берілген садақаның сауабы еселенеді.'
  },
  {
    title: 'Өзгеге жақсылық жасау',
    category: 'Адамгершілік',
    note: 'Жақсылықтың кішісі болмайды, ниет маңызды.'
  },
  {
    title: 'Жаңа сүре жаттау',
    category: 'Құран',
    note: 'Құран жаттау – жүрекке нұр, ақыретке азық.'
  },
  {
    title: 'Күліп жүру',
    category: 'Адамгершілік',
    note: 'Күлімсіреу де – садақа.'
  },
  {
    title: 'Алланың 10 есімін жаттау және сол есімге сай амал қылу',
    category: 'Иман',
    note: 'Алланы тану – иманды күшейтеді.'
  },
  {
    title: 'Зікір: “СубхаанАллаһи уә бихамдиһи, СубхаанАллаһил\'азыйим” 100 рет',
    category: 'Зікір',
    note: 'Бұл зікірдің сауабы ауыр таразыда өте үлкен.'
  },
  {
    title: 'Отбасыңды қуанту',
    category: 'Отбасы',
    note: 'Жақындарды қуантудың өзі – сауап.'
  },
  {
    title: '“Мүлік” сүресін мағынасымен оқу',
    category: 'Құран',
    note: 'Бұл сүре қабір азабынан қорғайды.'
  },
  {
    title: 'Толық күн дәретпен жүру',
    category: 'Құлшылық',
    note: 'Дәрет – рухани тазалық пен қорған.'
  },
  {
    title: 'Нәпіл намаз оқу (дұха, қажет, тәубе, әууабин)',
    category: 'Намаз',
    note: 'Нәпіл намаз – Аллаға жақындататын құлшылық.'
  },
  {
    title: 'Зікір: “Лә хәулә уә лә қууәтә иллә билләһ” 100 рет',
    category: 'Зікір',
    note: 'Бұл зікір – жәннат қазынасының бірі.'
  },
  {
    title: 'Ауыз аштыру',
    category: 'Садақа',
    note: 'Ауыз аштырған адам ораза ұстағандай сауап алады.'
  },
  {
    title: 'Пайғамбарымызға махаббатты арттыру (сира)',
    category: 'Сира',
    note: 'Пайғамбарымыздың өмірін оқу – иманды арттырады.'
  },
  {
    title: 'Намаздағы сөздердің қазақша мағынасын оқу/қайталау/жаттау',
    category: 'Білім',
    note: 'Намазды түсініп оқу – құлшылық сапасын арттырады.'
  },
  {
    title: 'Зікір: “Астағфируллаһ уә әтубу иләйһ” 100 рет',
    category: 'Зікір',
    note: 'Күнәлардың кешірілуін Алладан сұрау.'
  },
  {
    title: 'Пайғамбарымыз сүннеті бойынша бір амал жасау',
    category: 'Сүннет',
    note: 'Сүннетке амал ету – үлкен сауап.'
  },
  {
    title: 'Үйге кірерде және шығарда оқылатын дұғаны жаттау',
    category: 'Дұға',
    note: 'Күнделікті өмірде дұғамен жүру – береке.'
  },
  {
    title: 'Қайталап жүрген жаман әдеттен айырылу',
    category: 'Тәрбие',
    note: 'Өзін өзгерту – үлкен жеңіс.'
  },
  {
    title: 'Пайдалы подкаст көру',
    category: 'Білім',
    note: 'Пайдалы білім – жүрекке нұр.'
  },
  {
    title: 'Мұсылманның білуі қажет 40 парызын жаттау',
    category: 'Білім',
    note: 'Парызды білу – әр мұсылманға міндет.'
  },
  {
    title: 'Бәдір шайқасының тарихын оқу, білу, жаттау',
    category: 'Тарих',
    note: 'Ислам тарихы – иман сабағы.'
  },
  {
    title: 'Жақыныңа жұма сыйын сыйлау',
    category: 'Отбасы',
    note: 'Жұма күні сыйлық беру – жақсы амал.'
  },
  {
    title: 'Кітап оқу (30 бет)',
    category: 'Білім',
    note: 'Күн сайын оқу – рухани өсу.'
  },
  {
    title: 'Өзіңе қажетті дұға жинақ жазу',
    category: 'Дұға',
    note: 'Өмірге керек дұғаларды жинақтау.'
  },
  {
    title: 'Қадір түнін түнгі құлшылықпен өткізу',
    category: 'Құлшылық',
    note: 'Бұл түн – мың айдан қайырлы.'
  },
  {
    title: 'Бір сахабаның өмір жолымен танысу',
    category: 'Сира',
    note: 'Сахабалар – ең жақсы үлгі.'
  },
  {
    title: 'Әр намазды аса ықыласпен, “ихсан” хәлінде оқу',
    category: 'Намаз',
    note: 'Алланы көріп тұрғандай құлшылық ету.'
  },
  {
    title: 'Мешітте бір жақсы амал қылу',
    category: 'Мешіт',
    note: 'Намаз оқу, тазалау немесе Құран қою – үлкен сауап.'
  }
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

