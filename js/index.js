const q = document.querySelector.bind(document)
const qa = document.querySelectorAll.bind(document)
gsap.registerPlugin(ScrollTrigger, Draggable)
let gsap_media = gsap.matchMedia()
// load

// var load_gsap = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.load-box',
//         start:'top 20%',
//         end:'bottom top',
//         pin:true,
//         scrub:true,
//         markers:true,
//     },
// })
// .to('.load-bg',{
//     scale:1.2,
// })
// .to('.load-box',{
//     autoAlpha:0,
// })

const nav_anim = gsap.from('nav',{
    margin:20,
    borderRadius:10,
    scrollTrigger:{
        trigger:'body',
        start:'5px top',
        toggleActions:"play none none reverse",
    },
})
// header

var head_swiper_bg = new Swiper('.head-swiper-bg', {
    loop:true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction:false,
    }
})
gsap.to('.head-bg',{
    y:100,
    scrollTrigger:{
        trigger:'header',
        start:'center center',
        endTrigger:'#body1',
        end:'center center',
        scrub:1,
    }
})

// body1

var body1_swiper = new Swiper('.body1-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1: {
            slidesPerView: 1.2,
        },
        1080: {
            slidesPerView: 3,
        },
    }
})
body1_card_data.forEach((item) => {
    body1_swiper.appendSlide(`
    <div class="swiper-slide">
        <div class="card body1-card">
            <h1 class="card-title body1-card-title fw-bold">${item.title}</h1>
            <div class="overflow-hidden">
                <img src="${item.img}" alt="" class="card-img-top body1-card-img">
            </div>
            <div class="card-body body1-card-body">
                <p class="card-text f6 taj lep" >${item.text}</p>
            </div>
        </div>
    </div>
    `)
})


gsap.from('.body1-card',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#body1',
        start:'20% center',
        end:'center center',
    },
})
// gsap.to('main',{
//     y:-1 * q('#body1').offsetHeight,
//     scrollTrigger:{
//         trigger:'header',
//         start:'top top',
//         end:'bottom top',
//         pin:true,
//         scrub:true,
//         ease:'linear',
//         markers:true,
//     },
// })

// body2

var body2_swiper = new Swiper('.body2-swiper', {
    slidesPerView: 4,
    breakpoints: {
        1: {
            slidesPerView: 1.5,
        },
        1080: {
            slidesPerView: 4,
        },
    }
})

// body4

var body4_swiper = new Swiper('.body4-swiper', {
    slidesPerView: 4,
    centeredSlides:true,
    breakpoints: {
        1: {
            slidesPerView: 1.2,
            spaceBetween:20,
        },
        1080: {
            slidesPerView: 4,
            spaceBetween:0,
        },
    },
})

//
var body2_img_gsap = gsap.timeline()
.to('.body2-img,.body2-img2',{
    autoAlpha:0,
    ease: 'linear',
    duration: .2,
})
.from('.body2-img,.body2-img2',{
    autoAlpha: 0,
    ease: 'linear',
    duration: .2,
},'>')
body2_img_gsap.pause()

function mobile_fun() {
    body2_swiper.removeAllSlides()
    body4_swiper.removeAllSlides()
    mobile.forEach((item, index) => {
        body2_swiper.appendSlide(`
        <div class="swiper-slide col-lg-3 col-12">
            <div id="${item}" class="${index === 0 || index === 2 ? 'body2-btn' : 'body2-btn2'} ${item === mobile_click?'active':''}" onclick="body2_btn_click(event)">
                <p class="f7">${mobile_title[index].p}</p>
                <h1 class="f5">${mobile_title[index].title}<br>
                    「${item}」
                </h1>
            </div>
        </div>
        `)
    })
    body2_img_gsap.restart()
    const sss = mobile_data[mobile_click]
    q('.body2-img').src = sss.body2_img
    q('.body2-title').innerText = sss.body2_title
    q('.body2-p').innerText = sss.body2_p
    q('.body2-img2').src = sss.body2_img2
    q('.body2-title2').innerText = sss.body2_title2
    q('.body2-p2').innerText = sss.body2_p2
    q('.body3-text').innerText = sss.body3_text
    q('.body3-text2').innerText = sss.body3_text2
    q('.body3-img').src = sss.body3_img
    body4_data[mobile_click].forEach((item, index) => {
        body4_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="card body4-card">
                <img src="${item.img}" alt="" class="card-img-top body4-img">
                <div class="card-body">
                    <h1 class="card-title body4-title f5 text-center fw-bold">${item.title}</h1>
                    <p class="card-text body4-text f7">${item.text}</p>
                </div>
            </div>
        </div>
        `)
    })
    gsap.to('.body2-btn', {
        y: 50,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'linear'
    })
    gsap.to('.body2-btn2', {
        y: -50,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'linear'
    })
}
function body2_btn_click(e) {
    mobile_click = e.currentTarget.id
    mobile_fun()
}
mobile_fun()
gsap_media.add('(min-width:1080px)',()=>{
    gsap.from('.body3-img',{
        x:300,
        autoAlpha:0,
        duration:1,
        ease:"bounce.out",
        scrollTrigger:{
            trigger:'#body3',
            start:'top center',
            end:'center center',
        }
    })
})
// body5
gsap_media.add('(min-width:1080px)',()=>{
        gsap.to('.body4-swiper-wrapper',{
            x:0,
            duration:2,
            scrollTrigger:{
                trigger:'.body4-swiper',
                start:'top center',
                end:'center center',
                scrub:1,
            }
        })
    })
var body5_swiper = new Swiper('.body5-swiper', {
    grabCursor:true,
    slidesPerView:1.2,
    spaceBetween:20,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination:{
        el:'.body5-pagination',
        clickable:true,
    },
    navigation:{
        nextEl:'.body5-swiper-next',
        prevEl:'.body5-swiper-prev',
    },
})
body5_data.forEach((item,index)=>{
    body5_swiper.appendSlide(`
    <div class="swiper-slide">
        <div class="forum">
            <div>
                <h1 class="f5 forum-name">${item.name}</h1>
                <p class="text-end">${item.email}</p>
            </div>
            <div class="forum-content p-3">
                <p class="f7">
                    ${item.text}
                </p>
            </div>
        </div>
    </div>
    `)
})
Chart.defaults.font.size = 18
Chart.defaults.color = '#79AC78'
const body5_chart = new Chart(q('#body5-chart'), {
    type: 'doughnut',
    data: {
        labels: ['第一週「歷史之旅」', '第二週「城市大自然」', '第三週「街頭藝術之旅」', '第四週「多元文化探索」'],
        datasets: [{
            label: '萬人',
            data: [300, 330, 280, 320],
            backgroundColor:[
                '#79AC78',
                '#E9B824',
                '#6499E9',
                '#FF8080'
            ]
        }]
    },
})



// body6

function body6(){
    q('.serve-btn-box').innerHTML = ''
    body6_btn.forEach((item)=>{
        q('.serve-btn-box').innerHTML += `
            <div id="${item}" class="my-3 serve-btn fw-bold ${item === body6_click ?'active' : ''}" onclick="body6_a(event)">${item}</div>
        `
    })
    gsap.from('.body6-text',{
        y:50,
        opacity:0,
        duration:.5,
    })
    q('.body6-text').innerHTML = `${body6_data[body6_click]}`
}
function body6_a(e){
    body6_click = e.currentTarget.id
    body6()
}
body6()
var message_name = []
var message_email = []
var message_text = []

function message_submit(event){
    if (q('form input').value != '') {
        message_name.push(q('.message-name').value)
        message_email.push(q('.message-email').value)
        message_text.push(q('.message-text').value)
        localStorage.setItem('message-name', JSON.stringify(message_name))
        localStorage.setItem('message-email', JSON.stringify(message_email))
        localStorage.setItem('message-text', JSON.stringify(message_text))
        body5_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="forum">
                <div>
                    <h1 class="f5 forum-name">${q('.message-name').value}</h1>
                    <p class="text-end">${q('.message-email').value}</p>
                </div>
                <div class="forum-content p-3">
                    <p class="f7">${q('.message-text').value}</p>
                </div>
            </div>
        </div>
        `)
        q('.message-name').value = ''
        q('.message-email').value = ''
        q('.message-text').value = ''
        location.href='#body5'
        body5_swiper.slideTo(body5_swiper.slides.length - 1, 0)
        body5_swiper.autoplay.start()
    }
}
window.addEventListener('load', () => {
    const local_name = JSON.parse(localStorage.getItem('message-name')) || []
    const local_email = JSON.parse(localStorage.getItem('message-email')) || []
    const local_text = JSON.parse(localStorage.getItem('message-text')) || []
    local_name.forEach((item, index) => {
        body5_swiper.appendSlide(`
        <div class="swiper-slide">
            <div class="forum">
                <div>
                    <h1 class="f5 forum-name">${item}</h1>
                    <p class="text-end">${local_email[index]}</p>
                </div>
                <div class="forum-content p-3">
                    <p class="f7">${local_text[index]}</p>
                </div>
            </div>
        </div>
        `)
    })
    message_name = message_name.concat(local_name)
    message_email = message_email.concat(local_email)
    message_text = message_text.concat(local_text)
})
// 
var rrr = 0
q('.robot-btn').addEventListener('click', () => {
    gsap.from('.robot-btn img', {
        opacity: 0,
        duration: .5,
        ease: 'linear',
    })
    q('.robot-box').classList.toggle('active')
    if (rrr === 0) {
        q('.robot-btn img').src = './img/關閉x.png'
        rrr = 1
    } else {
        q('.robot-btn img').src = './img/機器人.png'
        rrr = 0
    }
})

q('.robot-submit').addEventListener('click', () => {
    if (q('.robot-input').value != '') {
        q('.robot-body').innerHTML += `
        <p class="df justify-content-end align-items-end">
            <span class="robot-mess2">
                ${q('.robot-input').value}
            </span>
        </p>
        `
        let ans = '感謝您的詢問，我們將通知網頁管理員為您回復'
        x = Object.keys(robot_data).filter(k => q('.robot-input').value.includes(k))
        if(x.length){
            ans = robot_data[x].text
            window.location.href = `#${robot_data[x].url}`
        }
        setTimeout(() => {
            q('.robot-body').innerHTML += `
            <p>
                <span class="robot-mess">
                    ${ans}
                </span>
            </p>
            `
            q('.robot-body').scrollTo({
                top: q('.robot-body').scrollHeight,
                behavior: 'smooth',
            })
        }, 500);
        q('.robot-input').value = ''
    }
})
q('.robot-input').addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        q('.robot-submit').click()
    }
})

var sun_click = 'sun'
const color_data = {
    sun:{
        '--bg--color1':'#79AC78',
        '--bg--color2':'#E9B824',
        '--body--bg':'#fff',
        '--body--color':'#000',         
    },
    moon:{
        '--bg--color1':'#E9B824',
        '--bg--color2':'#79AC78',
        '--body--bg':'#5d5d5d',
        '--body--color':'#fff', 
    },
}
function sun(){
    if(sun_click === 'sun'){
        sun_click = 'moon'
        q('.nav-icon-sun').src='./img/nav/nav-icon-moon.png'
    }else{
        sun_click = 'sun'
        q('.nav-icon-sun').src='./img/nav/nav-icon-sun.png'
    }
    for(let key in color_data[sun_click]){
        console.log(color_data[sun_click][key]);
        document.documentElement.style.setProperty(key,color_data[sun_click][key])
    }
}
var fs = 1
const fs_data = {
    1:{
        '--fs--title':'80px',
        '--fs--1':'70px',
        '--fs--2':'60px',
        '--fs--3':'50px',
        '--fs--4':'40px',
        '--fs--5':'30px',
        '--fs--6':'23px',
        '--fs--7':'20px',
    },
    2:{
        '--fs--title':'83px',
        '--fs--1':'73px',
        '--fs--2':'63px',
        '--fs--3':'53px',
        '--fs--4':'43px',
        '--fs--5':'33px',
        '--fs--6':'26px',
        '--fs--7':'23px',
    },
    3:{
        '--fs--title':'86px',
        '--fs--1':'76px',
        '--fs--2':'66px',
        '--fs--3':'56px',
        '--fs--4':'46px',
        '--fs--5':'36px',
        '--fs--6':'29px',
        '--fs--7':'26px',
    },
}
function fs_click(){
    fs +=1
    console.log(fs);
    if(fs === 2){
        for(let key in fs_data[fs]){
            document.documentElement.style.setProperty(key,fs_data[fs][key])
            q('.fs-btn').innerText = 'A+'
        }
    }else if(fs === 3){
        for(let key in fs_data[fs]){
            document.documentElement.style.setProperty(key,fs_data[fs][key])
        }
        q('.fs-btn').innerText = 'A++'
    }else{
        fs = 1
        for(let key in fs_data[fs]){
            document.documentElement.style.setProperty(key,fs_data[fs][key])
        }
        q('.fs-btn').innerText = 'A'
    }
}

// modal

const login_modal = new bootstrap.Modal('#login')


q('.nav-login').addEventListener('click', () => {
    login_modal.show()
})

q('.login-btn').addEventListener('click', () => {
   q('.nav-login').innerHTML += '<p><span class="color2 fw-bold">b034</span><br>於高雄市登入</p>' 
})


function gsap_title_anim(elem,dur){
    gsap.from(elem,{
        x:-150,
        opacity:0,
        duration:dur,
        scrollTrigger:{
            trigger:elem,
            start:'top center',
            end:'center center',
            // markers:true,
        },
    })
}
gsap_title_anim('.title',1)
gsap_title_anim('.title2',1)
gsap_title_anim('.title3',1)
gsap_title_anim('.title4',1)
gsap_title_anim('.title5',1)
gsap_title_anim('.title6',1)

