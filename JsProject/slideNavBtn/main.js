const $slide = document.querySelector('.slide')
const $leftBtn = document.querySelector('.slide-btn-left')
const $rightBtn = document.querySelector('.slide-btn-right')
const $slideItems = document.querySelectorAll('.slide-box')

let slideWidth = $slide.clientWidth // 슬라이드 너비
let slideNums = $slideItems.length // 슬라이드 개수
let currentSlide = 1 // 현재 슬라이드 번호

const rightBtnEvent = () => {
  currentSlide++ // 슬라이드 번호 +1

  if (currentSlide <= slideNums) {
    const offset = slideWidth * (currentSlide - 1) // 슬라이드 이동을 위한 offset 계산

    // 각 슬라이드의 left에 offset 적용 (-offset을 줘서 왼쪽으로 이동)
    $slideItems.forEach(item => {
      item.setAttribute('style', `left: ${-offset}px`)
    })
  } else {
    currentSlide--
  }
}

const leftBtnEvent = () => {
  currentSlide-- // 슬라이드 번호 -1

  if (currentSlide > 0) {
    const offset = slideWidth * (currentSlide - 1)
    $slideItems.forEach(item => {
      item.setAttribute('style', `left: ${-offset}px`)
    })
  } else {
    currentSlide++
  }
}

// '👉' 버튼 이벤트 추가
$rightBtn.addEventListener('click', rightBtnEvent)

// '👈' 버튼 이벤트 추가
$leftBtn.addEventListener('click', leftBtnEvent)

// 브라우저 화면 너비가 변경될 때도 slideWidth값 최신화
window.addEventListener('resize', () => {
  slideWidth = $slide.clientWidth // 슬라이드 너비
})
