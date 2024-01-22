let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        if (isIntersecting) {
          target.style.opacity = 1;
        } else {
          target.style.opacity = 0.4;
        }
      });
    },
    {
      rootMargin: '-10px', // 뷰포트와의 거리
      threshold: 0.9,    // 요소가 얼마나 교차해야 하는지의 비율 (0.0 ~ 1.0)
    }
  );

  // 모든 "item" 클래스를 가진 요소에 대해 옵저버를 등록
  let items = document.querySelectorAll('.item');
  items.forEach((item) => {
    observer.observe(item);
  });




  