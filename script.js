document.addEventListener('DOMContentLoaded', () => {

    // --- Khởi tạo thư viện AOS (Animate On Scroll) ---
    AOS.init({
        duration: 800,      // Thời gian hiệu ứng (ms)
        easing: 'ease-in-out', // Kiểu hiệu ứng
        once: true,         // Chỉ chạy hiệu ứng 1 lần
        offset: 100         // Bắt đầu hiệu ứng sớm hơn 100px trước khi phần tử xuất hiện
    });

    // --- Header dính và đổi màu nền khi cuộn ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Menu responsive (Hamburger Menu) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Khi bạn muốn hiện menu trên mobile, bạn sẽ cần thêm CSS để tạo style cho nó
    // Ví dụ, chúng ta sẽ làm ở bước sau, giờ chỉ viết logic
    // Để đơn giản, tôi sẽ bỏ qua phần này trong ví dụ này để tập trung vào layout chính
    // Bạn có thể dùng lại logic từ phiên bản trước nếu cần.
    
    // --> Logic cho mobile menu có thể được thêm vào đây nếu cần.
    // --> Do thiết kế này phức tạp hơn, menu mobile cũng cần được thiết kế lại cẩn thận.

});