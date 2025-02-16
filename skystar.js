// poem
var words=[
'很开心我们出现在彼此的生命里',
'成为彼此很重要的人，离不开也不想离开的人',
'虽然我不是那一个暖心的人',
'也会有坏脾气和不理解',
'但希望我在你眼里，我依然是很好的那个',
'可能慢慢我们的新鲜感会过',
'会产生倦意，会发现彼此的好多缺点',
'可“爱”是什么呢？受是时间把所有的掩体都拿掉',
'我还是觉得你好可爱',
'我还是依然毫不犹豫的想要在你身边',
'愿我们能享受炙热的新鲜感',
'也能经受得住时光的打磨',
'对于我而言，你永远是星辰大海无可替代',
'你不需要有多完美，你只需要做你自己就好',
'我会慢慢又长长的要你',
'周而复始，因为“慢慢亦漫漫',
   ];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
