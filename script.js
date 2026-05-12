/**
 * نظام إدارة مسابقة "ميدان المعرفة الشامل"
 * إعداد وتصميم الأستاذ محمد أسرار
 */

// 1. دالة إنشاء خانات الأسماء (تستدعى في index.html)
function setupTeams(val) {
    const numberOfTeams = parseInt(val);
    const displayArea = document.getElementById('teams-display');
    const startButton = document.getElementById('goBtn');
    
    displayArea.innerHTML = '';
    
    for(let i = 1; i <= numberOfTeams; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `اسم الفريق ${i}`;
        input.className = 'team-input';
        input.id = `team_${i}`;
        displayArea.appendChild(input);
    }
    
    // ربط زر الدخول بوظيفة الحفظ والانتقال
    startButton.style.display = 'inline-block';
    startButton.onclick = saveAndContinue;
}

// 2. دالة حفظ البيانات والانتقال لصفحة الأنماط
function saveAndContinue() {
    const inputs = document.querySelectorAll('.team-input');
    let teamsData = [];

    inputs.forEach((input, index) => {
        if (input.value.trim() !== "") {
            teamsData.push({
                id: index + 1,
                name: input.value,
                score: 0
            });
        }
    });

    if (teamsData.length < 2) {
        alert("يرجى إدخال أسماء الفريقين على الأقل للمتابعة.");
        return;
    }

    // حفظ البيانات في ذاكرة المتصفح (localStorage) لتربط الصفحات
    localStorage.setItem('midan_teams', JSON.stringify(teamsData));
    
    // الانتقال لصفحة اختيار الأنماط
    window.location.href = 'modes.html';
}

// 3. دالة تُستدعى في الصفحات الأخرى (مثل صفحة الخريطة) لاسترجاع البيانات
function getCompetitionData() {
    const data = localStorage.getItem('midan_teams');
    return data ? JSON.parse(data) : [];
}

// 4. دالة اختيار النمط والانتقال لصفحة التحدي
function startMode(modeType) {
    // يمكن إضافة منطق لتحديد الصفحة بناءً على النمط
    const pages = {
        'map': 'map_challenge.html',
        'boxes': 'boxes_challenge.html',
        'gold': 'gold_challenge.html',
        'debate': 'debate_challenge.html'
    };
    
    if (pages[modeType]) {
        window.location.href = pages[modeType];
    }
}
