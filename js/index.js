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
            <div class="content">` +
      document.querySelector('.enter').value +
      `</div>
                <button class="edit">edit</button>
                <button class="delete">delete</button>`
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
    if (e.target === document.querySelectorAll('.edit')[i]) {
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
    if (e.target === document.querySelectorAll('.status')[i]) {
      e.target.innerHTML = `O`
      e.target.parentNode.querySelector('.content').value = e.target.parentNode
        .querySelector('.content')
        .value.strike()
    }
  }
}
