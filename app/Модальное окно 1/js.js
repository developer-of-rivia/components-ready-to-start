document.addEventListener('DOMContentLoaded', () => {
    let $modalScroll = document.querySelector('.graph-modal');
    const modal = new GraphModal({
        isOpen: (modal) => {
            console.log('opened');
            scrollLock.disablePageScroll($modalScroll);
        },
        isClose: () => {
            console.log('closed');
            scrollLock.enablePageScroll($modalScroll);
        }
    });
    // new GraphModal().open('second');
});