const $slide = document.querySelector('.slide')
const $leftBtn = document.querySelector('.slide-btn-left')
const $rightBtn = document.querySelector('.slide-btn-right')
const $slideItems = document.querySelectorAll('.slide-box')
const $pagination = document.querySelector('.slide_pagination')

let slideWidth = $slide.clientWidth // 슬라이드 너비
let slideNums = $slideItems.length // 슬라이드 개수
let currentSlide = 1 // 현재 슬라이드 번호

// 페이지네이션 생성
for (let i = 0; i < slideNums; i++) {
  if (i === 0) {
    $pagination.innerHTML += `<li class="active">•</li>`
  } else {
    $pagination.innerHTML += `<li>•</li>`
  }
}
const $paginationItems = document.querySelectorAll('.slide_pagination > li')
console.log($paginationItems)

// 슬라이드 이동 할 때 현재 활성화된 pagination 변경
const activePagination = () => {
  $paginationItems.forEach(item => item.classList.remove('active'))
  $paginationItems[currentSlide - 1].classList.add('active')
}

const rightBtnEvent = () => {
  currentSlide++ // 슬라이드 번호 +1

  if (currentSlide <= slideNums) {
    const offset = slideWidth * (currentSlide - 1) // 슬라이드 이동을 위한 offset 계산

    // 각 슬라이드의 left에 offset 적용 (-offset을 줘서 왼쪽으로 이동)
    $slideItems.forEach(item => {
      item.setAttribute('style', `left: ${-offset}px`)
    })
    activePagination()
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
    // 슬라이드 이동 할 때 현재 활성화된 pagination 변경
    activePagination()
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

// 페이지네이션 클릭 할 때 해당 슬라이드로 이동
for (let i = 0; i < slideNums; i++) {
  // 각 페이지네이션 마다 클릭 이벤트 추가
  $paginationItems[i].addEventListener('click', () => {
    currentSlide = i + 1 // curSlide의 시작 위치가 1이기 때문
    const offset = slideWidth * (currentSlide - 1) // 슬라이드 이동을 위한 offset 계산
    console.log(slideWidth, currentSlide, slideWidth * (currentSlide - 1))
    // 각 슬라이드 아이템의 left에 offset 적용
    $slideItems.forEach(item => {
      item.setAttribute('style', `left: ${-offset}px`)
    })
    // 슬라이드 이동 할 때 현재 활성화된 pagination 변경
    activePagination()
  })
}
