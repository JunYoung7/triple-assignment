import { useEffect, useState } from 'react'

function easyOutExpo(x: number): number {
  // easing 함수 중 easeOutExpro 사용
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function useNumCount(startNum: number, maxNum: number, duration: number) {
  const [count, setCount] = useState(startNum)

  useEffect(() => {
    let step = 0
    let myReq: number // cancelAnimationFrame 사용을 위한 변수

    const increaseCountAnimation = () => {
      step += 1
      const progress = easyOutExpo((step * (1000 / 60)) / duration)
      const curCount = Math.round(maxNum * progress)
      if (curCount <= maxNum) {
        setCount(curCount)
        myReq = requestAnimationFrame(increaseCountAnimation)
      }

      if (curCount === maxNum) {
        cancelAnimationFrame(myReq)
      }
    }

    requestAnimationFrame(increaseCountAnimation)
  }, [startNum, maxNum, duration])

  return count
}

export default useNumCount
