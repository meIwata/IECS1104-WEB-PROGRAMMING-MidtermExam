document.getElementById('all').addEventListener('click', () => {
    document.querySelectorAll('.gallery img').forEach(img => img.classList.remove('hidden'));
});

document.getElementById('nature').addEventListener('click', () => {
    document.querySelectorAll('.gallery img').forEach(img => {
        img.classList.toggle('hidden', !img.classList.contains('nature'));
    });
});

document.getElementById('city').addEventListener('click', () => {
    document.querySelectorAll('.gallery img').forEach(img => {
        img.classList.toggle('hidden', !img.classList.contains('city'));
    });
});



/*圖片停留計時器*/
document.querySelectorAll('.gallery img').forEach(img => {
    // 創建一個顯示時間的元素
    const timerDisplay = document.createElement('div');
    timerDisplay.style.position = 'absolute';
    timerDisplay.style.top = '5px';
    timerDisplay.style.left = '5px';
    timerDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    timerDisplay.style.color = 'white';
    timerDisplay.style.padding = '2px 5px';
    timerDisplay.style.borderRadius = '3px';
    timerDisplay.style.fontSize = '12px';
    timerDisplay.style.display = 'none'; // 初始隱藏
    img.style.position = 'relative'; // 確保父元素是相對定位
    img.parentElement.style.position = 'relative'; // 確保父元素是相對定位
    img.parentElement.appendChild(timerDisplay);

    let hoverStartTime = 0;
    let hoverInterval;

    img.addEventListener('mouseenter', () => {
        hoverStartTime = Date.now();
        timerDisplay.style.display = 'block'; // 顯示計時器
        hoverInterval = setInterval(() => {
            const elapsedTime = ((Date.now() - hoverStartTime) / 1000).toFixed(1);
            timerDisplay.textContent = `${elapsedTime} 秒`;
        }, 100);
    });

    img.addEventListener('mouseleave', () => {
        clearInterval(hoverInterval);
        timerDisplay.style.display = 'none'; // 隱藏計時器
    });
});

/*視窗縮到最小，圖片要可以變成 one column */
function adjustGalleryLayout() {
    const gallery = document.querySelector('.gallery');
    if (window.innerWidth < 600) {
        gallery.style.flexDirection = 'column';
        gallery.style.alignItems = 'center'; // 確保圖片居中
    } else {
        gallery.style.flexDirection = 'row';
        gallery.style.alignItems = 'flex-start'; // 恢復原始佈局
    }
}

// 初始化佈局
adjustGalleryLayout();

// 監聽視窗大小變化
window.addEventListener('resize', adjustGalleryLayout);