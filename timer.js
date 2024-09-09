let currentDate
const updateCurrentDate = setInterval(() => {
    currentDate = new Date()
}, 1000)

const timersData = [
    {
        name: 'Міша',
        dateOfBirth: new Date(2006, 11, 23, 0, 0),
        dataIndex: 0,
        textDays: null,
        textHours: null,
        textMinutes: null,
        textSeconds: null,
        textBirthday: null,
        init() {
            this.textDays = document.querySelector(`.days${this.dataIndex}`)
            this.textHours = document.querySelector(`.hours${this.dataIndex}`)
            this.textMinutes = document.querySelector(`.minutes${this.dataIndex}`)
            this.textSeconds = document.querySelector(`.seconds${this.dataIndex}`)
            this.textBirthday = document.querySelector(`.birthdayText${this.dataIndex}`)
        },
        checkBirthdayDate(date) {
            if (date.getTime() - new Date().getTime() < 0) {
                date = new Date(date.getFullYear() +1, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                this.checkBirthdayDate(date)
            } else {
                return this.dateOfBirth = date
            }
        }
    },
    {
        name: 'Влад',
        dateOfBirth: new Date(2007, 3, 27, 0, 0),
        dataIndex: 1,
        textDays: null,
        textHours: null,
        textMinutes: null,
        textSeconds: null,
        textBirthday: null,
        init() {
            this.textDays = document.querySelector(`.days${this.dataIndex}`)
            this.textHours = document.querySelector(`.hours${this.dataIndex}`)
            this.textMinutes = document.querySelector(`.minutes${this.dataIndex}`)
            this.textSeconds = document.querySelector(`.seconds${this.dataIndex}`)
            this.textBirthday = document.querySelector(`.birthdayText${this.dataIndex}`)
        },
        checkBirthdayDate(date) {
            if (date.getTime() - new Date().getTime() < 0) {
                date = new Date(date.getFullYear() +1, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                this.checkBirthdayDate(date)
            } else {
                return this.dateOfBirth = date
            }
        }
    },
    {
        name: 'Боба',
        dateOfBirth: new Date(2006, 11, 11, 0, 0),
        dataIndex: 2,
        textDays: null,
        textHours: null,
        textMinutes: null,
        textSeconds: null,
        textBirthday: null,
        init() {
            this.textDays = document.querySelector(`.days${this.dataIndex}`)
            this.textHours = document.querySelector(`.hours${this.dataIndex}`)
            this.textMinutes = document.querySelector(`.minutes${this.dataIndex}`)
            this.textSeconds = document.querySelector(`.seconds${this.dataIndex}`)
            this.textBirthday = document.querySelector(`.birthdayText${this.dataIndex}`)
        },
        checkBirthdayDate(date) {
            if (date.getTime() - new Date().getTime() < 0) {
                date = new Date(date.getFullYear() +1, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                this.checkBirthdayDate(date)
            } else {
                return this.dateOfBirth = date
            }
        }
    },
    {
        name: 'Повар ТАРАС',
        dateOfBirth: new Date(2007, 2, 12, 0, 0),
        dataIndex: 3,
        textDays: null,
        textHours: null,
        textMinutes: null,
        textSeconds: null,
        textBirthday: null,
        init() {
            this.textDays = document.querySelector(`.days${this.dataIndex}`)
            this.textHours = document.querySelector(`.hours${this.dataIndex}`)
            this.textMinutes = document.querySelector(`.minutes${this.dataIndex}`)
            this.textSeconds = document.querySelector(`.seconds${this.dataIndex}`)
            this.textBirthday = document.querySelector(`.birthdayText${this.dataIndex}`)
        },
        checkBirthdayDate(date) {
            if (date.getTime() - new Date().getTime() < 0) {
                date = new Date(date.getFullYear() +1, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                this.checkBirthdayDate(date)
            } else {
                return this.dateOfBirth = date
            }
        }
    },
    {
        name: 'Нет зверя сільнєє кітайца, саша дота сосі нам яйца',
        dateOfBirth: new Date(2006, 11, 1, 0, 0),
        dataIndex: 4,
        textDays: null,
        textHours: null,
        textMinutes: null,
        textSeconds: null,
        textBirthday: null,
        init() {
            this.textDays = document.querySelector(`.days${this.dataIndex}`)
            this.textHours = document.querySelector(`.hours${this.dataIndex}`)
            this.textMinutes = document.querySelector(`.minutes${this.dataIndex}`)
            this.textSeconds = document.querySelector(`.seconds${this.dataIndex}`)
            this.textBirthday = document.querySelector(`.birthdayText${this.dataIndex}`)
        },
        checkBirthdayDate(date) {
            if (date.getTime() - new Date().getTime() < 0) {
                date = new Date(date.getFullYear() +1, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                this.checkBirthdayDate(date)
            } else {
                return this.dateOfBirth = date
            }
        }
    },
]
const container = document.querySelector('.container')

const greetings = [
    "З Днем народження! Щастя і удачі!",
    "Вітаю! Нехай здійсниться все задумане!",
    "Зі святом! Здоров'я та радості!",
    "Щасливого Дня народження! Бажаю всього найкращого!",
    "З Днем народження! Хай життя буде солодким!",
    "Вітаю! Нехай мрії збуваються!",
    "Зі святом! Щастя і успіхів!",
    "З Днем народження! Насолоджуйся кожною миттю!",
    "Вітаю! Бажаю незабутніх моментів!",
    "Зі святом! Хай посмішки супроводжують завжди!",
    "З Днем народження! Бажаю багато радості!",
    "Вітаю! Удачі у всьому!",
    "Зі святом! Бажаю любові та щастя!",
    "З Днем народження! Нехай кожен день буде яскравим!",
    "Вітаю! Хай щастя буде безмежним!",
    "Зі святом! Бажаю тільки найкращого!",
    "З Днем народження! Радості та веселощів!",
    "Вітаю! Нехай успіхи не залишають тебе!",
    "Зі святом! Щастя і кохання!",
    "З Днем народження! Нехай життя буде прекрасним!",
    "Вітаю! Хай мрії здійснюються легко!"
]


let oneDay =  24 * 60 * 60 * 1000
let oneHour = 60 * 60 * 1000
let oneMinute = 60 * 1000
let oneSecond = 1000

function loadTimerData() {
    container.innerHTML = ''
    timersData.forEach((item) => {
        generateHTML(item.dataIndex, item.name)
        item.init()
        updateTimer(item.dateOfBirth, item.textDays, item.textHours, item.textMinutes, item.textSeconds, item.textBirthday)

    })
}



function generateHTML(index, name){
    container.insertAdjacentHTML('beforeend', `
        <div class="timer__container">
            <h1 class="text__center birthdayText${index}">${name}</h1>
            <div class="timer">
                <div class="item">
                    <span class="days${index}">00</span> <div class="item__text">Days</div>
                </div>
                <span class="dividing">:</span>
                <div class="item">
                    <span class="hours${index}">00</span> <div class="item__text">Hours</div>
                </div>
                <span class="dividing">:</span>
                <div class="item">
                    <span class="minutes${index}">00</span> <div class="item__text">Minutes</div>
                </div>
                <span class="dividing">:</span>
                <div class="item">
                    <span class="seconds${index}">00</span> <div class="item__text">Seconds</div>
                </div>
            </div>
        </div>
    `)
}

function updateTimer(personBirthday, textDays, textHours, textMinutes, textSeconds, birthdayText) {
    const timer = setInterval(() => {
        let milisecDifference = personBirthday.getTime() - currentDate.getTime()
        let leftDays = Math.floor(milisecDifference / oneDay)
        let leftHours = Math.floor((milisecDifference % oneDay) / oneHour)
        let leftMinutes = Math.floor ((milisecDifference % oneHour) / oneMinute)
        let leftSeconds = Math.floor ((milisecDifference % oneMinute) / oneSecond)

        correctData(leftDays, textDays)
        correctData(leftHours, textHours)
        correctData(leftMinutes, textMinutes)
        correctData(leftSeconds, textSeconds)

        checkEnd(personBirthday, timer, leftDays, leftHours, leftMinutes, leftSeconds, textDays, textHours, textMinutes, textSeconds, birthdayText)
    }, 1000)
}

function correctData(arg, el) {
    if (arg < 10) {
        el.innerHTML = '0' + arg.toString()
    } else {
        el.innerHTML = arg.toString()
    }
}
function checkEnd(personBirthday, clearTimer, leftDays, leftHours, leftMinutes, leftSeconds, textDays, textHours, textMinutes, textSeconds, birthdayText) {
    if (leftDays <= 0 && leftHours <= 0 && leftMinutes <= 0 && leftSeconds <= 0){
        textDays.innerHTML = '00'
        textHours.innerHTML = '00'
        textMinutes.innerHTML = '00'
        textSeconds.innerHTML = '00'

        // personBirthday = new Date(personBirthday.getFullYear() + 1, personBirthday.getMonth(), personBirthday.getDate(), 0, 0)
        clearInterval(clearTimer)
        birthdayTimer(personBirthday, birthdayText)
    }
}

function birthdayTimer(personBirthday, birthdayText) {
        const intervalBirthday = setInterval(() => {
            if (currentDate.getMonth() == personBirthday.getMonth() && currentDate.getDate() == personBirthday.getDate()) {
                birthdayText.innerHTML = greetings[Math.floor(Math.random() * greetings.length)]
            } else {
                clearInterval(intervalBirthday)
                timersData.forEach((item) => {
                    item.checkBirthdayDate(item.dateOfBirth)
                })
                loadTimerData()
            }
            }, 3000)



}

loadTimerData()