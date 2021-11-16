export const toggleScroll = () => {
    const container = document.getElementsByClassName('messages')[0]
    if (container) {
        container.scrollTop = container.scrollHeight
    }
}