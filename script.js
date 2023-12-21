var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
  let rectanglelocation = rect.getBoundingClientRect();
  // console.log(rectanglelocation);
  let insiderectval = details.clientX - rectanglelocation.left;
  // console.log(insiderectval);

  if (insiderectval < rectanglelocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor} , 0,0)`,
      ease: Power4,
    });
    console.log('red');
  } else {
    let blueColor = gsap.utils.mapRange(
        
        rectanglelocation.width / 2,
        rectanglelocation.width,
        0,
        255,
        insiderectval
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0, 0,${blueColor})`,
        ease: Power4,
      });
      console.log('blue');
  }
});


rect.addEventListener("mouseleave" , ()=>{
    gsap.to(rect, {
        backgroundColor: "white"
    })
})