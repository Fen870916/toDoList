// 新增matter
document.querySelector('.add').addEventListener('click', clickAddButton)
function clickAddButton() {
  // 有輸入才可以新增
  if (document.querySelector('.enter').value !== '') {
    let matter = document.createElement('div')
    matter.classList.add('matter')
    let number = document.querySelectorAll('.matter').length
    matter.innerHTML =
      `<div class="number">` +
      (number + 1) +
      `</div>
      <button class="status undone">X</button>
            <div class="content">` +
      document.querySelector('.enter').value +
      `</div>
                <button class="edit">edit</button>
                <button class="delete">delete</button>`
    if (document.querySelector('.list').classList.contains('complete')) {
      matter.style.display = 'none'
    }
    document.querySelector('.list').appendChild(matter)
    document.querySelector('.enter').value = ''
  }
}

// 刪除matter
document.querySelector('.list').addEventListener('click', clickDeleteButton)
function clickDeleteButton(e) {
  for (i = 0; i < document.querySelectorAll('.delete').length; i++) {
    if (e.target === document.querySelectorAll('.delete')[i]) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)

      // 讓number不會有跳號
      for (i = 0; i < document.querySelectorAll('.number').length; i++) {
        document.querySelectorAll('.number')[i].innerHTML = i + 1
      }
    }
  }
}

// 編輯matter

document.addEventListener('click', clickEditButton)
function clickEditButton(e) {
  let flag
  let number
  for (i = 0; i < document.querySelectorAll('.edit').length; i++) {
    if (
      e.target === document.querySelectorAll('.edit')[i] &&
      e.target.parentNode.querySelector('.status').classList.contains('undone')
    ) {
      document.querySelector('.enter').focus()
      document.querySelector('.enter').value =
        e.target.parentNode.querySelector('.content').innerHTML
      number = i
      flag = 1
    }
    document.querySelector('.enter').addEventListener('blur', contentBlur)
    function contentBlur(e) {
      if (flag === 1) {
        document.querySelectorAll('.content')[number].innerHTML = e.target.value
        e.target.value = ''
        flag = 0
      }
    }
  }
}

// 是否完成matter
document.querySelector('.list').addEventListener('click', clickStatusButton)
function clickStatusButton(e) {
  for (i = 0; i < document.querySelectorAll('.status').length; i++) {
    if (
      e.target === document.querySelectorAll('.status')[i] &&
      e.target.classList.contains('undone')
    ) {
      e.target.innerHTML = `O`
      e.target.classList.remove('undone')
      e.target.classList.add('complete')
      e.target.parentNode.querySelector('.content').innerHTML =
        e.target.parentNode.querySelector('.content').innerText.strike()
      if (!document.querySelector('.list').classList.contains('all')) {
        clickUndoneButton()
      }
    } else if (
      e.target === document.querySelectorAll('.status')[i] &&
      e.target.classList.contains('complete')
    ) {
      e.target.innerHTML = `X`
      e.target.classList.remove('complete')
      e.target.classList.add('undone')
      e.target.parentNode.querySelector('.content').innerHTML =
        e.target.parentNode.querySelector('.content').innerText
      if (!document.querySelector('.list').classList.contains('all')) {
        clickCompleteButton()
      }
    }
  }
}

// 分類
// 全部
document.querySelector('.all').addEventListener('click', clickAllButton)
function clickAllButton() {
  for (i = 0; i < document.querySelectorAll('.matter>.status').length; i++) {
    document.querySelectorAll('.matter>.status')[i].parentNode.style.display =
      'block'
  }
  if (!document.querySelector('.list').classList.contains('all')) {
    document.querySelector('.list').classList.add('all')
  }
}

// 完成
document
  .querySelector('.sort>.complete')
  .addEventListener('click', clickCompleteButton)
function clickCompleteButton() {
  console.log(1)
  for (i = 0; i < document.querySelectorAll('.matter>.status').length; i++) {
    if (
      !document
        .querySelectorAll('.matter>.status')
        [i].classList.contains('complete')
    ) {
      document.querySelectorAll('.matter>.status')[i].parentNode.style.display =
        'none'
    } else {
      document.querySelectorAll('.matter>.status')[i].parentNode.style.display =
        'block'
    }
  }

  if (!document.querySelector('.list').classList.contains('complete')) {
    document.querySelector('.list').classList.add('complete')
  }
  document.querySelector('.list').classList.remove('all')
  document.querySelector('.list').classList.remove('undone')
}

// 未完成
document
  .querySelector('.sort>.undone')
  .addEventListener('click', clickUndoneButton)
function clickUndoneButton() {
  for (i = 0; i < document.querySelectorAll('.matter>.status').length; i++) {
    if (
      !document
        .querySelectorAll('.matter>.status')
        [i].classList.contains('undone')
    ) {
      document.querySelectorAll('.matter>.status')[i].parentNode.style.display =
        'none'
    } else {
      document.querySelectorAll('.matter>.status')[i].parentNode.style.display =
        'block'
    }
  }
  if (!document.querySelector('.list').classList.contains('undone')) {
    document.querySelector('.list').classList.add('undone')
  }
  document.querySelector('.list').classList.remove('all')
  document.querySelector('.list').classList.remove('complete')
}
