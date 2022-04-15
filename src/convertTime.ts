
export function secondsToString(seconds: number): string {
    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    let twoDigitSeconds = seconds.toString().padStart(2, "0")
    let twoDigitMinutes = minutes.toString().padStart(2, "0")
    return `${twoDigitMinutes}:${twoDigitSeconds}`
}
