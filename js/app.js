// Select Element Function

const t1 = gsap.timeline();
t1.from([".item"],{
  duration:1.2,
  height: 0,
  y: -200,
  ease: "power3.inOut",
  stagger:{
    amount: .3
  }
})

.from([".nav_item"],{
  delay: -0.8,
  y: 16,
  opacity: 0,
  duration: 0.8,
  ease: "power3.inOut",
  stagger:{
    amount: .5
  }
})

.from([".revealer_element"],{
  stagger:{
    amount: .5
  }
})

.from([".revealer_content"],{
  delay: -0.8,
  y: 15,
  opacity: 0,
  ease: "power3.inOut",
  stagger:{
    amount: .5
  }
})

.from([".info"],{
  delay: -0.4,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
})

.from([".scroll_down"],{
  delay: -0.4,
  x: 20,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
})


.from([".social a"],{
  delay: -0.4,
  x: -80,
  opacity: 0,
  duration: .8,
  ease: "power3.out",
  stagger:{
    amount: .2
  }
})

.from([".btn_ span"],{
  delay: -0.4,
  x: 80,
  opacity: 0,
  duration: .8,
  ease: "power3.out",
  stagger:{
    amount: .2
  }
})
.from([".next_page"],{
  delay: -0.4,
  x: 80,
  opacity: 0,
  duration: .8,
  ease: "power3.out"
  
})
.from([".next_info span", ".next_info h2", ".next_page i"],{
  delay: -0.4,
  y: 20,
  opacity: 0,
  duration: .8,
  ease: "power3.out",
  stagger:{
    amount: .2
  }
})

gsap.from([".work_info a"],{
  delay: 2,
  x: -60,
  opacity: 0,
  duration: .8,
  ease: "power3.out",
  stagger:{
    amount: .3
  }
})