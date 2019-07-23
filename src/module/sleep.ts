/**
 * sleep 函数
 *
 * time 等待的时长
 */
export default function sleep (time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
