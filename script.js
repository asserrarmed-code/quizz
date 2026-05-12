/**
 * إعداد وتصميم الأستاذ محمد أسرار
 * دالة إنشاء خانات إدخال أسماء الفرق
 */
function setupTeams(val) {
    const numberOfTeams = parseInt(val);
    const displayArea = document.getElementById('teams-display');
    const startButton = document.getElementById('goBtn');
    
    // مسح المحتوى القديم
    displayArea.innerHTML = '';
    
    // إنشاء الخانات بناءً على العدد المختار
    for(let i = 1; i <= numberOfTeams; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `اسم الفريق ${i}`;
        input.className = 'team-input';
        // إضافة خانة الإدخال لمنطقة العرض
        displayArea.appendChild(input);
    }
    
    // إظهار زر الانطلاق
    startButton.style.display = 'inline-block';
}

// يمكن إضافة منطق الانتقال للوحة التحكم هنا لاحقاً
