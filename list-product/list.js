//-----------ấn chuột để chuyển tiếp slider img---------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgSliderNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0

rightbtn.addEventListener ("click",function(){
  index++  //vòng lặp next ảnh khi ấn chuột
  if(index>imgSliderNumber.length-1){
    index=0
  }
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click",function(){
  index--   //vòng lặp lùi ảnh khi ấn chuột
  if(index<=0){
    index=imgSliderNumber.length-1
  }
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})

//xử lý xự kiện khi ấn nút xem chi tiết cấu hình
  document.querySelector('#information').addEventListener('click', function() {
  document.querySelector('.information-form').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';

});
//xử lý sự kiện khi nhấn nút close 
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.information-form').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
});

