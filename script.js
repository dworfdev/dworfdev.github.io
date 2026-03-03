// 1. Disclaimer Logic
function acceptDisclaimer() {
    const overlay = document.getElementById('disclaimer');
    overlay.style.transition = 'opacity 0.5s ease, visibility 0.5s';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
    localStorage.setItem('dworf_disclaimer_accepted', 'true');
}

const aboutMeText = `> NAME: %*#@)!~
> ROLE: BEST DEVELOPER
> SKILLS: UNITY, C#, C++
> STATUS: ALREADY DEAD`;

function typeWriter(text, elementId, speed = 30) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Очистка перед началом

    function type() {
        if (i < text.length) {
            // Если встречаем \n, заменяем на <br>
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter(aboutMeText, 'about-me-content');
});

const targetText = "DWORF.DEV";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+<>?";
const titleEl = document.getElementById('glitch-title');

function scrambleText() {
    if (!titleEl) return;
    let iteration = 0;
    titleEl.classList.add('glitch-active');
    const interval = setInterval(() => {
        titleEl.innerText = targetText.split("").map((char, index) => {
            if(index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if(iteration >= targetText.length) {
            clearInterval(interval);
            titleEl.classList.remove('glitch-active');
        }
        iteration += 1 / 3;
    }, 30);
}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('disclaimer');
    if (localStorage.getItem('dworf_disclaimer_accepted') === 'true') {
        overlay.style.display = 'none';
    }
    setInterval(scrambleText, 6000);
    updateMissionStatus();
});

function triggerSwag() {
    const body = document.body;
    const button = document.getElementById('swag-button');
    const projectsSection = document.getElementById('projects-grid');

    body.classList.add('system-critical', 'shake');
    button.innerText = "CRITICAL_ERROR";
    button.style.backgroundColor = "#ff0000";

    setTimeout(() => {
        body.classList.remove('system-critical', 'shake');
        
        // Плавний переліт до проектів
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            button.innerText = "TO PROJECTS";
            button.style.backgroundColor = "#00ff00";
        }, 1000);
    }, 400);
}

// 6. FINAL DESTRUCTION (The Troll)
function triggerTroll() {
    const body = document.body;
    
    // 1. Додаємо тряску для ефекту набору потужності
    body.classList.add('shake');
    
    // 2. Змінюємо текст на всьому сайті
    document.querySelectorAll('h1, h2, p, span, h3, button').forEach(el => {
        el.innerText = "SYSTEM_FAILURE_VOID";
        el.style.color = "#ff0000";
    });

    setTimeout(() => {
        // ВАЖЛИВО: Прибираємо тряску, щоб оверлей не смикався разом з контентом
        body.classList.remove('shake');
        
        // ВАЖЛИВО: Скролимо в самий верх, щоб оверлей з top:0 перекрив усе
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        const overlay = document.createElement('div');
        overlay.id = 'horror-overlay';
        overlay.style.display = 'flex';
        
        overlay.innerHTML = `
            <div class="glitch-text-packed font-black">
                YOU'RE COOKED :)<br>
                SYSTEM BREACHED<br>
                CLOUT OVERLOAD<br>
                YOU'RE COOKED :)<br>
                ACCESS_DENIED
            </div>
            
            <div class="system-logs-horror text-center">
                IP_ADDR: LEAKED_TO_VOID<br>
                STATUS: DATA_CORRUPTED<br>
                <span class="animate-pulse text-black font-bold">WIPING_YOUR_SSD: 84%...</span>
            </div>

            <div class="absolute bottom-10 text-black font-black uppercase tracking-widest">
                F5 IS YOUR ONLY GOD NOW. BYE.
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Блокуємо скрол
        document.body.style.overflow = 'hidden';

        // Popup Hell
        const popupInterval = setInterval(() => {
            const win = document.createElement('div');
            // Випадкова позиція ТІЛЬКИ у видимій частині екрану
            const x = Math.random() * (window.innerWidth - 250);
            const y = Math.random() * (window.innerHeight - 150);
            
            win.className = 'critical-popup';
            win.style.left = `${x}px`;
            win.style.top = `${y}px`;
            win.innerHTML = `
                <div class="popup-header">KERNEL_PANIC.exe</div>
                <div class="popup-body">YOU'RE COOKED :)</div>
            `;
            document.body.appendChild(win);
        }, 150);

        // КІНЕЦЬ (Краш через 5 секунд)
        setTimeout(() => {
            console.log("CRITICAL_FAILURE: MEMORY_LEAK_START");
            
            clearInterval(popupInterval); 

            const heavyAssault = [];
            while(true) {
                heavyAssault.push(new Array(1000000).fill("SWAG_OVERLOAD"));
                console.error("SYSTEM_OVERFLOW_DATA_LEAKED");
            }
        }, 5000);
        
    }, 800);
}

const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function initBinaryRain() {
    const bg = document.querySelector('.binary-bg');
    if (!bg) return;

    // Очищаємо перед генерацією
    bg.innerHTML = '';
    
    // Робимо так, щоб символи заповнювали весь екран
    const fontSize = 14;
    const columns = Math.ceil(window.innerWidth / fontSize);
    const rows = Math.ceil(window.innerHeight / fontSize);

    for (let i = 0; i < rows; i++) {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.width = '100%';
        
        let content = '';
        for (let j = 0; j < columns; j++) {
            content += Math.round(Math.random());
        }
        div.innerText = content;
        bg.appendChild(div);
    }

    // Динамічне оновлення рядків
    setInterval(() => {
        const lines = bg.querySelectorAll('div');
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        let newLine = '';
        for (let j = 0; j < columns; j++) {
            newLine += Math.round(Math.random());
        }
        randomLine.innerText = newLine;
    }, 50);
}

// Додай це, щоб при зміні розміру вікна дощ не ламався
window.addEventListener('resize', initBinaryRain);
