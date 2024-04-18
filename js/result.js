import { results, mbtis } from "./data.js";
// http://127.0.0.1:5050/result.html?mbti=istj
// mbti=istj <- 이걸 뽑아내야 함
//쿼리스트링
const mbti = new URLSearchParams(location.search).get("mbti") 
console.log('mbti = ' + mbti)

const result = results[mbtis[mbti]]
console,log(result)

const titleEl = document.querySelector(".page-title") //document -> 최상위
const characterEl = document.querySelector(".character")
const boxEl = document.querySelectorAll(".box")
const jobsEl = document.querySelectorAll(".job") 
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture img")

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEl.forEach(function(boxE1, index){
  boxE1.innerHTML = result.results[index]
})
jobsEl.forEach(function(jobsEl ,index){
  jobsEl.innerHTML = result.jobs[index]
})

//이미지 url
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg