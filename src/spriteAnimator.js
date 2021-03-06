import $ from 'jquery'

const animations = []
let animInterval
let animating = false

const startAnimations = ({interval=1000}) => {
  if(animating) return
  animInterval = setInterval(() => {
    animations.forEach(anim => {
      anim.$el.removeClass(`${anim.name}-${anim.currentFrame}`)
      if(anim.currentFrame >= anim.numOfFrames) {
        anim.currentFrame = 0
      }
      anim.currentFrame = padExtraDigit(Number(anim.currentFrame)+1)
      anim.$el.addClass(`${anim.name}-${anim.currentFrame}`)
    })
  }, interval)
  animating = true
}

const stopAnimations = () => {
  clearInterval(animInterval)
  animating = false
}

const addAnimation = (name, numOfFrames) => {
  const anim = {
    $el: $(`#${name}`),
    name,
    numOfFrames,
    currentFrame: 1
  }
  animations.push(anim)
}

const padExtraDigit = num => {
  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  return pad(num, 2)
}


export { addAnimation, startAnimations, stopAnimations }