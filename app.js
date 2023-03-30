const quizData = [
    {
        question: 'En aktif Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'a',
      },
      {
        question: 'En komik Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'b',
      },
      {
        question: 'En gezen Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'd',
      },
      {
        question: 'En üretken Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'c',
      },
      {
        question: ' Co-founder zetupme?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'e',
      },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelector(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")


let currentQuit = 0
let score = 0

