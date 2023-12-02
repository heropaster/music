export const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const remainingSeconds = duration % 60;

    const formattedMinutes = String(minutes)
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}