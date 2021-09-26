window.onload = function () {

    $('.solutions-item, .solutions-item-name, .solutions-item-full-name, .solutions-item-line').click((e) => {
        $('.solution-description').hide();
        $('.solutions-item').removeClass('selected');
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('#' + id).show();
        currentElement.parents('.solutions-item').addClass('selected');
    });


    $('#solutions, #solutions-container, #solutions-items, #solutions-title').click((e) => {
        if (e.target.id === 'solutions' || e.target.id === 'solutions-container' || e.target.id === 'solutions-items' || e.target.id === "solutions-title") {
            $('.solution-description').hide();
            $('.solutions-item').removeClass('selected');
        }
    });

    let animItems = document.getElementsByClassName('animateItems');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                let animItem = animItems[i];
                let animItemHeight = animItem.offsetHeight;
                let animItemOffset = offset(animItem).top;
                let animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active')
                } else {
                    animItem.classList.remove('_active')
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
            animOnScroll()
        }, 300);
    }


}